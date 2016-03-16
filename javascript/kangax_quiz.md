### 우리가 보던 초록과 빨강의 조화로운 그 유명한 차트를 관리하시던 그분 의 js 퀴즈.

http://perfectionkills.com/javascript-quiz/

스포주의. 재밌다. 기억해두어보자. ( 부제 : 욕나오는 JS ^^ )


1.
```
  (function(){
    return typeof arguments;
  })();
```
- 답 : "object" 다. (외워)
- typeof 는 늘 결과값이 string 이다.

2. 
```
 var f = function g(){ return 23; };
  typeof g();
```
- 답 : Error
- var 에 담는 function 은 named 로 해도 anymorous fn 처럼 작동한다( 불확실 )
- g() 는 에러, f() 는 23 이다.

3
```
(function(x){
    delete x;
    return x;
  })(1);
```
- 답 : 1
- delete 는 객체의 properties 에만 가능하다.
- delete doesn't affect local variable names. 위의 delete x; 는 false 를 반환한다. 프로퍼티 삭제시에는 true 를 반환.
- http://perfectionkills.com/understanding-delete/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete

4.
```
var y = 1, x = y = typeof x;
  x;
```
- 답 : "undefined"
- 뒤에서 부터 진행 될테니. typeof x는...역시.

5. 
```
  (function f(f){
    return typeof f();
  })(function(){ return 1; });
```
- "number"
- ITTF? 맞나 즉시실행 함수.
- ()안의 named function 선언은 글로벌에 올라가지 않는다. 따라서 function(f){ 도 같은 결과.
- (x = 3, y= 5) 이나 (x = function(){}) 는 예상대로 동작한다.
- typeof f()는 arg 의 f 가 된다.


