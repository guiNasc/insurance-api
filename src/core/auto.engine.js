const basicEngine = require("./basic.engine");

/**
 * Validate insurance rules over vehicle user's personal information.
 *
 * @param {*} userPersonalInfo
 * @returns score | { ineligible: true }
 */
const validate = (userPersonalInfo) => {
  if (!userPersonalInfo.vehicle) {
    return { line: "auto", score: "ineligible" };
  }

  let score = basicEngine.calculateInitalScore(userPersonalInfo.risk_questions);
  score = basicEngine.applyCommonRules(userPersonalInfo, score);

  const carAge = new Date().getFullYear() - userPersonalInfo.vehicle.year;
  if (carAge <= 5) {
    score = +score + 1;
  }

  return { line: "auto", score: score };
};

module.exports = validate;
