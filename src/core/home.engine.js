const basicEngine = require("./basic.engine");

/**
 * Validate insurance rules over home user's personal information.
 *
 * @param {*} userPersonalInfo
 * @returns score | { ineligible: true }
 */
const validate = (userPersonalInfo) => {
  if (!userPersonalInfo.house) {
    return { line: "home", score: "ineligible" };
  }

  let score = basicEngine.calculateInitalScore(userPersonalInfo.risk_questions);
  score = basicEngine.applyCommonRules(userPersonalInfo, score);

  if (userPersonalInfo.house.ownership_status === "mortgaged") {
    score = +score + 1;
  }

  return { line: "home", score: score };
};

module.exports = validate;
