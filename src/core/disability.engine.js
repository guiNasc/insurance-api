const basicEngine = require("./basic.engine");
/**
 * Validate insurance rules over disability user's personal information.
 *
 * @param {*} userPersonalInfo
 * @returns score | { ineligible: true }
 */
const validate = (userPersonalInfo) => {
  if (!userPersonalInfo.income || userPersonalInfo.age > 60) {
    return { line: "disability", score: "ineligible" };
  }

  let score = basicEngine.calculateInitalScore(userPersonalInfo.risk_questions);
  score = basicEngine.applyCommonRules(userPersonalInfo, score);

  if (
    userPersonalInfo.house &&
    userPersonalInfo.house.ownership_status === "mortgaged"
  ) {
    score = +score + 1;
  }

  if (userPersonalInfo.dependents) {
    score = +score + 1;
  }

  if (userPersonalInfo.marital_status === "married") {
    score = +score - 1;
  }

  return { line: "disability", score: score };
};

module.exports = validate;
