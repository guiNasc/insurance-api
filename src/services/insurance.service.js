const insuranceRisk = require("../core/insurance.risk");

/**
 * Calculate a risk profile by calling core insrance risk.
 *
 * @param {*} userPersonalInfo
 * @returns {*} output
 */
const calculate = (userPersonalInfo) => {
  return insuranceRisk.fullEvaluation(userPersonalInfo);
};

module.exports = { calculate };
