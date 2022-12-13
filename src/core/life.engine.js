const basicEngine = require("./basic.engine");

/**
 * Validate insurance rules over life user's personal information.
 *
 * @param {*} userPersonalInfo
 * @returns score | { ineligible: true }
 */
const validate = (userPersonalInfo) => {
  if (userPersonalInfo.age > 60) {
    return { line: "life", score: "ineligible" };
  }

  let score = basicEngine.calculateInitalScore(userPersonalInfo.risk_questions);
  score = basicEngine.applyCommonRules(userPersonalInfo, score);

  if (userPersonalInfo.dependents) {
    score = +score + 1;
  }

  if (userPersonalInfo.marital_status === "married") {
    score = +score + 1;
  }

  return { line: "life", score: score };
};

module.exports = validate;
