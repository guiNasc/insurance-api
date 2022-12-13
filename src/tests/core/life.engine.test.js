const lifeEngine = require("../../core/life.engine");

const ineligibleScenarios = [
  [
    "Age over 60",
    {
      age: 61,
      dependents: 2,
      house: { ownership_status: "owned" },
      income: 0,
      marital_status: "married",
      risk_questions: [0, 1, 0],
    },
    { line: "life", score: "ineligible" },
  ],
];

describe("life engine ineligible tests", () => {
  test.each(ineligibleScenarios)("test %s ", async (name, input, expected) => {
    const result = lifeEngine(input);
    expect(result).toEqual(expected);
  });
});

const eligibleScenarios = [
  [
    "Marital status married, 2 dependants",
    {
      age: 50,
      dependents: 2,
      house: { ownership_status: "owned" },
      income: 2.53,
      marital_status: "married",
      risk_questions: [0, 1, 0],
      vehicle: { year: new Date().getFullYear() - 5 },
    },
    { line: "life", score: 3 },
  ],
  [
    "Marital status single, 2 dependants",
    {
      age: 50,
      dependents: 2,
      house: { ownership_status: "owned" },
      income: 2.53,
      marital_status: "single",
      risk_questions: [0, 1, 0],
      vehicle: { year: new Date().getFullYear() - 5 },
    },
    { line: "life", score: 2 },
  ],
  [
    "Marital status single, no dependants",
    {
      age: 50,
      dependents: 0,
      house: { ownership_status: "owned" },
      income: 2.53,
      marital_status: "single",
      risk_questions: [1, 1, 0],
      vehicle: { year: new Date().getFullYear() - 5 },
    },
    { line: "life", score: 2 },
  ],
];

describe("life engine eligible tests", () => {
  test.each(eligibleScenarios)("test %s ", async (name, input, expected) => {
    const result = lifeEngine(input);
    expect(result).toEqual(expected);
  });
});
