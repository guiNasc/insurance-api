/**
 * Sum up the initial score
 *
 * @param {[]} - risk questions
 * @returns inital score
 */
const calculateInitalScore = (riskQuestions) => {
  return (riskQuestions || []).reduce((previous, current) => {
    return previous + current;
  }, 0);
};

/**
 * Start applying common rules
 *
 * @param {*} userPersonalInfo
 * @param {integer} score
 * @returns the inital score with common rules applied to.
 */
const applyCommonRules = (userPersonalInfo, score) => {
  scorePoints = score || 0;
  if (userPersonalInfo.age < 30) {
    scorePoints = +scorePoints - 2;
  }

  if (userPersonalInfo.age > 30 && userPersonalInfo.age < 40) {
    scorePoints = +scorePoints - 1;
  }

  if (userPersonalInfo.income > 200000) {
    scorePoints = +scorePoints - 1;
  }
  return scorePoints;
};

module.exports = { calculateInitalScore, applyCommonRules };
