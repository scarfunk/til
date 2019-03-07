
// TypeError - Converting circular structure to JSON 에 대하여.
// axios err 를 그대로 JSON.stringify 하면 터져버린다.
// https://github.com/axios/axios/issues/836 그다지 해결되 보이지도 않음.

var util = require('util');
try {
	// 1) 에러가 아닌 케이스.
	var obj = {
		a: "foo",
		b: obj
	} // 이건 괜찮음!.
	console.log(obj);
	let x = JSON.stringify(obj);
	console.log(x);

	// 2) 에러 케이스
	const obj2 = {
		"a": "a",
		"b": {
			"c": "c",
			"d": {
				"e": "e",
				"f": { // 3 이상 뎁스는 [object] 로 표기 된다. console.log의 스펙.
					"g": "g",
					"h": {
						"i": "i"
					}
				}
			}
		}
	};
	obj2.myself = obj2; // 이렇게 직접 프로퍼티 재할당 은 에러가 난다.
	// JSON.stringify(obj2); // Converting circular structure to JSON 에러가 터짐.
	console.log(util.inspect(obj2)); // 하지만 요건 해결이 된다.
	// stringify 같은 무한 뎁스를 보고자 할때.
	console.log(util.inspect(obj2, { showHidden: false, depth: null })); // 하지만 요건 해결이 된다.

	// TB Think.
	// console.log(util.inspect(new Error('This is an example error')))
} catch (e) {
	console.log(e);
}
