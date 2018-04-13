오랫만의 TIL 

1. 프로그래머 는 call by value 와 call by ref 는 언제나 맘속에 담아두어야 한다.

- arr.reverse() 의 return 은 clone 이 아니다. 실제 arr 를 변형시키는 방식인것을 또 놓쳤다.
- reverse() 를 쓰는건 배열의 마지막 요소를 꺼내기 위해 쓰곤 했는데(배열을 조작하지 않고), arr[arr.length-1] 을 항상 사용하도록 하자.

2. map 내부를 filter 하지 말자.
- arr.map(); 은 [undefined, undefined, ...]이다.
- map 내부 에서 if.. return 하더라도 갯수가 줄어들지 않는다.
