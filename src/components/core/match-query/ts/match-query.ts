class MatchQuery {

	matchQueryRule: string;
	value: number;

	constructor(data: string) {
		this.matchQueryRule = data;
		this.value = 0;
	}

	get rules(): string[] {
		return this.matchQueryRule.split(/\|/);
	}

	query() {
		for (let i = 0; i < this.rules.length; ++i) {
			if (window.matchMedia(this.rules[i].split(/=>/)[0]).matches) {
				this.value = +this.rules[i].split(/=>/)[1];
				return true;
			}
		}
	}

	// query() {
	// 	if (!this.match) {
	// 		// this.value = 3;
	// 	}
	// }
}

export default MatchQuery;


