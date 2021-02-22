let knightPosition = [0, 0]
let observer = null

function emitChange() {
	return observer(knightPosition)
}

export function observe(o) {
	if (observer) {
		// do nothing.
		console.log(observer);
		//throw new Error('multiple observers not implemented')
	} else {

		observer = o;
	}
	return emitChange();
}

export function moveKnight(toX, toY) {
	knightPosition = [toX, toY]
	console.log(knightPosition);
	return emitChange()
}
