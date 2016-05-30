# node.js Date 객체 주의사항 UTC timezone

### new Date() 객체
new Date() 는 현재 시간을 반환한다. Date 객체는 getTimezoneOffset() 이 존재하며,
UTC+10 라면 (Australian Eastern Standard Time), -600 이 반환된다.

	//저녁 20시 작성기준.
	new Date() // Mon May 30 2016 20:16:25 GMT+0900 (KST)
	new Date().getTimezoneOffset() // -540
	

### 문제의 발생.

위의 예제는 브라우져 상에서 해도 node 에서도 동일 해야 할것이다.
그러나.

	//node v6.0.0	
	new Date() // 2016-05-30T11:07:23.191Z --> ?????
	new Date().getTimezoneOffset() // -540 이건 정상.
	
new Date() 객체가 UTC 타임( KST - 9 )을 가져온다.

	//node v6.0.0	
	new Date().getHours() //20 추가 함수는 제대로된 KST 값을 가져온다.

그리고 v4 대에서는 또 정상적으로 동작했다;;

찾아 내기 어려웠지만 고수님께서 도움을 주셔서.

1. node의 `console.log`는 내부적으로 `util.inspect`를 쓴다
2. 그리고 `util.inspect`에서는 `Date`타입의 값이 넘어오면 `v.toISOString()`한걸 반환한다. [util.js](https://github.com/nodejs/node/blob/master/lib/util.js#L404)
3. 그리고 그 [변경 커밋](https://github.com/nodejs/node/commit/93d6b5fb68eae8b0912579980e17ebf0723ab2cc)
4. node 최신버젼 v6.0.0 에서 발생하며 LTS v4.4.X 이하에서는 정상동작 한다. v5 는 해보지 않았....

### 원본 소스는 v0.10.x 대를 쓰고 mocha TEST 작성에 node 를 v6 를 쓰니 이런 어처구니 없는 삽질을 했다. 주의 하도록 하자.
