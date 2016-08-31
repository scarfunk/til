#### Date.parse() 에 관하여.

Given a date string of "March 7, 2014", parse() assumes a local time zone, but given an ISO format such as "2014-03-07" it will assume a time zone of UTC (ES5 and ECMAScript 2015).

```
new Date(2014,02,07) // month is start 0
Fri Mar 07 2014 00:00:00 GMT+0900 (KST)
new Date('03 07 2014')
Fri Mar 07 2014 00:00:00 GMT+0900 (KST)
new Date('2014/03/07')
Fri Mar 07 2014 00:00:00 GMT+0900 (KST)
new Date("March 7, 2014")
Fri Mar 07 2014 00:00:00 GMT+0900 (KST)
new Date("2014-03-07")
Fri Mar 07 2014 09:00:00 GMT+0900 (KST)
```

이 거지같은 꼴을 보자.

'yyyy-mm-dd' 는 UTC 로 평가 된다.

죽일놈의 Date.
