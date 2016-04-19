# express response send undefined not sending.

- 오늘 코드를 만지다 문득 본 것인데 기록해둔다.

### 문제.
```
res.send({hello:'hello', world:undefined, foo:null});
```
일때, 클라이언트는
```
{hello:'hello', foo:null}
```
만 받게 되었다.

> undefined 를 value 로 갖는 prop는 어디로 갔는가??
  
### 삽질

 - res send undefined express not sending value sent json.
 - 검색...검색...답 안나온다.
 - 뭐지. 전송은 되었는데 브라우져 console 이 필터링해서 표시가 안되는건가?
 - var a = { world : undefined } 잘표시됨..
 - express 소스를 까뒤집어 보자.
 
### 결론
  - [JSON stringify](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 는 undefined를 없앤다.
  (JSON.stringify remove undefined)

  ```
  JSON.stringify({hello:'hello', world:undefined, foo:null});
  //"{"hello":"hello","foo":null}"
  ```

  - 추가로 function 역시 불가능하다.
  - json value 명세
  
  ![JSON](http://json.org/value.gif)

  
  - [node response http](https://nodejs.org/api/http.html#http_response_write_chunk_encoding_callback) 
   를 보면.response.write(chunk[, encoding][, callback]) > chunk can be a string or a buffer 라고 하고 있다.
  - 즉, http response를 위함은 string 전송을 해야하므로, 문자열 변환이 필요했다.
  [express 내부](https://github.com/expressjs/express/blob/master/lib/response.js#L242)
  에서도 역시 객체 > 문자열 변환 하고 있었다.
  (express 는 send <-> json function 을 반복 call 하며 변환을 시키고 있었다.)

### http 객체 전송에 신중을 가지도록 하자.
    
  


