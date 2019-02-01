export function delay<T>(p: Promise<T>, time = 500): Promise<T> {
	return p && p.then((res: T) => {
		return new Promise<T>((resolve) => {
			setTimeout(() => resolve(res), time)
		});
	});
}
export function timeout(time: number) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(), time);
	});
}

export interface Listenable {
	addEventListener: (event: string, cbc: (e: Event) => void, options?: object) => void;
}

export function fromEvent(target: Listenable, event: string, options = {}) {
	return new Promise((resolve) => {
		target.addEventListener(event, (e: Event) => resolve(e), Object.assign({}, options, {once: true}));
	});
}

export function loadScript(src: string, async = true) {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script') as HTMLScriptElement;
		script.async = async;
		script.type = 'text/javascript';
		script.src = src;
		script.onload = resolve;
		script.onerror = reject;
		document.body.appendChild(script);
	});
}
