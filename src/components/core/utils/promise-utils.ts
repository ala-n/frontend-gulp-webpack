
export function delay<T>(p: Promise<T>, timeout = 500): Promise<T> {
	return p && p.then((res: T) => {
		return new Promise<T>((resolve) => {
			setTimeout(() => resolve(res), timeout)
		});
	});
}
