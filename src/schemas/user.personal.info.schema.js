module.exports = {
	type: "object",
	required: ["age", "dependents", "income", "marital_status", "risk_questions"],
	properties: {
		age: {
			type: "integer",
			minimum: 0,
		},
		dependents: {
			type: "integer",
			minimum: 0,
		},
		income: {
			type: "number",
			minimum: 0,
		},
		marital_status: {
			type: "string",
			pattern: "^married$|^single$"
		},
		risk_questions: {
			type: "array",
			minItems: 3,
			items: {
				type: "integer",
				minimum: 0,
				maximum:1
			}
		},
		house: {
			type: "object",
			properties: {
				ownership_status: { type: "string", pattern: "^owned$|^mortgaged$"}
			},
			required: ["ownership_status"]
		},
		vehicle: {
			type: "object",
			properties: {
				year: { type: "integer", minimum: 1}
			},
			required: ["year"]
		}
	},
};
