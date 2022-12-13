const insuranceRisk = require("../../core/insurance.risk");
const eligibleScenarios = [
  [
    "Full evaluation",
    {
      age: 50,
      dependents: 2,
      house: { ownership_status: "owned" },
      income: 2.9,
      marital_status: "married",
      risk_questions: [1, 1, 0],
      vehicle: { year: new Date().getFullYear() - 5 },
    },
    {
      auto: "responsible",
      disability: "regular",
      home: "regular",
      life: "responsible",
    },
  ],
  [
    "Vehicle inelegible",
    {
      age: 50,
      dependents: 2,
      house: { ownership_status: "owned" },
      income: 2.9,
      marital_status: "married",
      risk_questions: [1, 1, 0],
    },
    {
      auto: "ineligible",
      disability: "regular",
      home: "regular",
      life: "responsible",
    },
  ],
  [
    "No house",
    {
      age: 50,
      dependents: 2,
      income: 2.9,
      marital_status: "married",
      risk_questions: [1, 1, 0],
      vehicle: { year: new Date().getFullYear() - 5 },
    },
    {
      auto: "responsible",
      disability: "regular",
      home: "ineligible",
      life: "responsible",
    },
  ],
  [
    "No house, age over 60",
    {
      age: 67,
      dependents: 2,
      income: 2.9,
      marital_status: "married",
      risk_questions: [1, 1, 0],
      vehicle: { year: new Date().getFullYear() - 5 },
    },
    {
      auto: "responsible",
      disability: "ineligible",
      home: "ineligible",
      life: "ineligible",
    },
  ],
  [
    "Full evaluation economic",
    {
      age: 29,
      dependents: 0,
      house: { ownership_status: "owned" },
      income: 4.769,
      marital_status: "single",
      risk_questions: [0, 0, 0],
      vehicle: { year: new Date().getFullYear() - 5 },
    },
    {
      auto: "economic",
      disability: "economic",
      home: "economic",
      life: "economic",
    },
  ],
  [
    "Full evaluation economic, disability regular",
    {
      age: 34,
      dependents: 1,
      house: { ownership_status: "mortgaged" },
      income: 4.769,
      marital_status: "single",
      risk_questions: [0, 0, 0],
      vehicle: { year: new Date().getFullYear() - 3 },
    },
    {
      auto: "economic",
      disability: "regular",
      home: "economic",
      life: "economic",
    },
  ],
];

describe("disabilityEngine engine eligible tests", () => {
  test.each(eligibleScenarios)("test %s ", async (name, input, expected) => {
    const result = insuranceRisk.fullEvaluation(input);
    expect(result).toEqual(expected);
  });
});
