const request = require("supertest");
const app = require("../../server");

const validationCases = [
  [
    "age",
    {
      age: -1,
      dependents: 2,
      house: { ownership_status: "owned" },
      income: 0,
      marital_status: "married",
      risk_questions: [0, 1, 0],
      vehicle: { year: 1 },
    },
  ],
  [
    "dependents",
    {
      age: 1,
      dependents: -1,
      house: { ownership_status: "owned" },
      income: 0,
      marital_status: "married",
      risk_questions: [0, 1, 0],
      vehicle: { year: 1 },
    },
  ],
  [
    "house",
    {
      age: -1,
      dependents: 2,
      house: {},
      income: 0,
      marital_status: "married",
      risk_questions: [0, 1, 0],
      vehicle: { year: 1 },
    },
  ],
  [
    "house",
    {
      age: -1,
      dependents: 2,
      house: { ownership_status: "owned" },
      income: 0,
      marital_status: "married",
      risk_questions: [0, 1, 0],
      vehicle: { year: 0 },
    },
  ],
];

describe("schema validation tests", () => {
  test.each(validationCases)("param %s missing", async (name, input) => {
    const res = await request(app)
      .post("/api/insurance/evaluation")
      .send(input);
    expect(res.statusCode).toEqual(400);
  });
});

const scoreCases = [
  [
    "complete",
    {
      age: 23,
      dependents: 2,
      house: { ownership_status: "owned" },
      income: 0,
      marital_status: "married",
      risk_questions: [0, 1, 0],
      vehicle: { year: (new Date().getFullYear() - 7) },
    },
    {
      auto: "economic",
      disability: "ineligible",
      home: "economic",
      life: "regular",
    },
  ],
  [
    "Home ineligible",
    {
      age: 23,
      dependents: 2,
      income: 0,
      marital_status: "married",
      risk_questions: [0, 1, 0],
      vehicle: { year: (new Date().getFullYear() - 7) },
    },
    {
      auto: "economic",
      disability: "ineligible",
      home: "ineligible",
      life: "regular",
    },
  ],
];

describe("score calculation tests", () => {
  test.each(scoreCases)("param %s missing", async (name, input, expected) => {
    const res = await request(app)
      .post("/api/insurance/evaluation")
      .send(input);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(expected);
  });
});
