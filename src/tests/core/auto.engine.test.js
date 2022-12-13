const autoEngine = require("../../core/auto.engine");

const ineligibleScenarios = [
  [
    "no vehicle",
    {
      age: 34,
      dependents: 2,
      house: { ownership_status: "owned" },
      income: 0,
      marital_status: "married",
      risk_questions: [0, 1, 0],
    },
    { line: "auto", score: "ineligible" },
  ],
];

describe("auto engine ineligible tests", () => {
  test.each(ineligibleScenarios)("test %s ", async (name, input, expected) => {
    const result = autoEngine(input);
    expect(result).toEqual(expected);
  });
});

const eligibleScenarios = [
  [
    "Age 34, car 5y.o",
    {
      age: 34,
      dependents: 2,
      house: { ownership_status: "owned" },
      income: 2.53,
      marital_status: "married",
      risk_questions: [0, 1, 0],
      vehicle: { year: new Date().getFullYear() - 5 },
    },
    { line: "auto", score: 1 },
  ],
  [
    "Age 34, car 6y.o",
    {
      age: 34,
      dependents: 2,
      house: { ownership_status: "owned" },
      income: 2.53,
      marital_status: "married",
      risk_questions: [0, 1, 0],
      vehicle: { year: new Date().getFullYear() - 6 },
    },
    { line: "auto", score: 0 },
  ],
  [
    "Age 41, car 4y.o",
    {
      age: 41,
      dependents: 2,
      house: { ownership_status: "owned" },
      income: 2.53,
      marital_status: "married",
      risk_questions: [0, 1, 0],
      vehicle: { year: new Date().getFullYear() - 4 },
    },
    { line: "auto", score: 2 },
  ],
];

describe("auto engine eligible tests", () => {
  test.each(eligibleScenarios)("test %s ", async (name, input, expected) => {
    const result = autoEngine(input);
    expect(result).toEqual(expected);
  });
});
