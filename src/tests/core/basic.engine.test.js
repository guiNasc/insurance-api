const engine = require("../../core/basic.engine");

const calculateInitalScoreScenarios = [
  ["Initial score should be 1", [0, 1, 0], 1],
  ["Initial score should be 3", [1, 1, 1], 3],
  ["Initial score should be 0", [0, 0, 0], 0],
  ["Initial score should be 0", null, 0],
];

describe("basic engine InitialScore tests", () => {
  test.each(calculateInitalScoreScenarios)(
    "test %s ",
    async (name, input, expected) => {
      const result = engine.calculateInitalScore(input);
      expect(result).toEqual(expected);
    }
  );
});

const applyBasicRulesScenarios = [
  [
    "Age under 30",
    {
      userPersonalInfo: {
        age: 29,
        dependents: 2,
        house: { ownership_status: "owned" },
        income: 2.53,
        marital_status: "married",
        risk_questions: [0, 1, 0],
        vehicle: { year: new Date().getFullYear() - 5 },
      },
      score: 1,
    },
    -1,
  ],
  [
    "Age under 30, null score",
    {
      userPersonalInfo: {
        age: 29,
        dependents: 2,
        house: { ownership_status: "owned" },
        income: 2.53,
        marital_status: "married",
        risk_questions: [0, 0, 0],
        vehicle: { year: new Date().getFullYear() - 5 },
      },
      score: null,
    },
    -2,
  ],
  [
    "Age between 30 and 40",
    {
      userPersonalInfo: {
        age: 38,
        dependents: 2,
        house: { ownership_status: "owned" },
        income: 2.530,
        marital_status: "married",
        risk_questions: [1, 1, 1],
        vehicle: { year: new Date().getFullYear() - 5 },
      },
      score: 3,
    },
    2,
  ],
  [
    "Age between 30 and 40, incode over 200k",
    {
      userPersonalInfo: {
        age: 38,
        dependents: 2,
        house: { ownership_status: "owned" },
        income: 200001,
        marital_status: "married",
        risk_questions: [1, 1, 1],
        vehicle: { year: new Date().getFullYear() - 5 },
      },
      score: 3,
    },
    1,
  ],
];

describe("basic engine InitialScore tests", () => {
  test.each(applyBasicRulesScenarios)(
    "test %s ",
    async (name, input, expected) => {
      const result = engine.applyCommonRules(
        input.userPersonalInfo,
        input.score
      );
      expect(result).toEqual(expected);
    }
  );
});
