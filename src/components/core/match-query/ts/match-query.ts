class MatchQueryRule {
	static parse(term: string) {
		const parts = term.split(/=>/);
		if (parts.length === 1) {
			return new MatchQueryRule('all', parts[0]);
		}
		return new MatchQueryRule(parts[0], parts.slice(1).join('=>'));
	}

	query: MediaQueryList;
	value: string;

	constructor(mediaQuery: string, value: string) {
		this.query = window.matchMedia(mediaQuery.trim());
		this.value = value;
	}

	get matches() {
		return this.query ? this.query.matches : null;
	}
}

class MatchQuery {
	static parse(query: string) {
		const parts = (query || '').split('|');
		const rules = parts.map(MatchQueryRule.parse);
		return new MatchQuery(rules);
	}

	rules: MatchQueryRule[];

	constructor(rules: MatchQueryRule[]) {
		this.rules = rules;
	}

	get matchedRule(): MatchQueryRule {
		return this.rules.find((rule) => rule.matches) || null;
	}

	get matchedValue(): string {
		const rule = this.matchedRule;
		return rule && rule.value;
	}
}

export default MatchQuery;


