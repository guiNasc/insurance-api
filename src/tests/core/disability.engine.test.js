const disabilityEngine = require("../../core/disability.engine");

const ineligibleScenarios = [
  [
    "Age over 60",
    {
      age: 61,
      dependents: 2,
      income: 2340,
      marital_status: "married",
      risk_questions: [0, 1, 0],
    },
    { line: "disability", score: "ineligible" },
  ],
  [
    "No income",
    {
      age: 45,
      dependents: 2,
      income: 0,
      marital_status: "married",
      risk_questions: [0, 1, 0],
    },
    { line: "disability", score: "ineligible" },
  ],
];

describe("disabilityEngine engine ineligible tests", () => {
  test.each(ineligibleScenarios)("test %s ", async (name, input, expected) => {
    const result = disabilityEngine(input);
    expect(result).toEqual(expected);
  });
});

const eligibleScenarios = [
  [
    "Age under 60, married with dependents",
    {
      age: 50,
      dependents: 2,
      house: { ownership_status: "owned" },
      income: 2.9,
      marital_status: "married",
      risk_questions: [1, 1, 0],
      vehicle: { year: new Date().getFullYear() - 5 },
    },
    { line: "disability", score: 2 },
  ],
  [
    "Age under 60, married with dependents and mortgaged house",
    {
      age: 50,
      dependents: 2,
      house: { ownership_status: "mortgaged" },
      income: 2.9,
      marital_status: "married",
      risk_questions: [1, 1, 0],
      vehicle: { year: new Date().getFullYear() - 5 },
    },
    { line: "disability", score: 3 },
  ],
  [
    "Age under 60, single with no dependents",
    {
      age: 50,
      dependents: 0,
      house: { ownership_status: "owned" },
      income: 2.9,
      marital_status: "single",
      risk_questions: [1, 1, 0],
      vehicle: { year: new Date().getFullYear() - 5 },
    },
    { line: "disability", score: 2 },
  ],
];

describe("disabilityEngine engine eligible tests", () => {
  test.each(eligibleScenarios)("test %s ", async (name, input, expected) => {
    const result = disabilityEngine(input);
    expect(result).toEqual(expected);
  });
});
