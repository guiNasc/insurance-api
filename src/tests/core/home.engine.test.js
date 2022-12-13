const homeEngine = require("../../core/home.engine");

const ineligibleScenarios = [
  [
    "No house",
    {
      age: 61,
      dependents: 2,
      income: 0,
      marital_status: "married",
      risk_questions: [0, 1, 0],
    },
    { line: "home", score: "ineligible" },
  ],
];

describe("home engine ineligible tests", () => {
  test.each(ineligibleScenarios)("test %s ", async (name, input, expected) => {
    const result = homeEngine(input);
    expect(result).toEqual(expected);
  });
});

const eligibleScenarios = [
  [
    "Owned house",
    {
      age: 50,
      dependents: 2,
      house: { ownership_status: "owned" },
      income: 2.9,
      marital_status: "married",
      risk_questions: [0, 1, 0],
      vehicle: { year: new Date().getFullYear() - 5 },
    },
    { line: "home", score: 1 },
  ],
  [
    "Mortgaged house",
    {
      age: 50,
      dependents: 2,
      house: { ownership_status: "mortgaged" },
      income: 2.9,
      marital_status: "married",
      risk_questions: [0, 1, 0],
      vehicle: { year: new Date().getFullYear() - 5 },
    },
    { line: "home", score: 2 },
  ],
];

describe("home engine eligible tests", () => {
  test.each(eligibleScenarios)("test %s ", async (name, input, expected) => {
    const result = homeEngine(input);
    expect(result).toEqual(expected);
  });
});
