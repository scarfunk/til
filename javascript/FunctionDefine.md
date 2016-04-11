### 자바스크립트의 function

3가지의 선택이 가능하다(아니 4가지이다.)

```

//함수가 아래 있지만 가능하다.
hello1(); //'hello1'

function hello1(){
    console.log('hello1')
}

hello2(); // 불가능하다. 할당은 런타임에 hello2는 undefined 이다.
var hello2 = function(){
    console.log('hello2');
}

//같은이름 할당문.
hello3(); // 실패한다. 할당문은 런타임이후에 일어난다.
var hello3 = function hello3(){
    console.log('hello3');
}

//다른이름 할당. 역시 둘다 실패한다.
hello4();
hello5();
// 그렇다면 hello5는 선언해도 쓸모가 없는가? 아니다.(재귀적으로는 쓸수 있다)
var hello4 = function hello5(){
    console.log('hello4 or 5');
    console.log(hello4); //function
    console.log(hello5); //function 하지만 함수내부에서는 사용가능하다.(재귀)
}

//즉시실행함수.
//any function
(function x(){
    console.log('x');
})();
x(); // ReferenceError: not defined.


//콜백함수.
function asyncfunction(str, callback){
    console.log('before do'+str);
    callback();
}
asyncfunction('hi', function imacallback(){
    console.log('wow! callback!');
});
imacallback(); //ReferenceError: not defined.

```
