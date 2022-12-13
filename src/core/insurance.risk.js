const autoEngine = require("./auto.engine");
const lifeEngine = require("./life.engine");
const homeEngine = require("./home.engine");
const disabilityEngine = require("./disability.engine");

const profiling = (functions, userPersonalInfo) => {
  return (functions || [])
    .map((fn) => fn(userPersonalInfo))
    .reduce((previous, current) => {
      return { ...previous, [current.line]: setNamedScore(current.score) };
    }, {});
};

const setNamedScore = (score) => {
  if (score <= 0) {
    return "economic";
  }

  if (score > 0 && score <= 2) {
    return "regular";
  }

  if (score >= 3) {
    return "responsible";
  }

  return score;
};

const fullEvaluation = (userPersonalInfo) => {
  const funcs = [autoEngine, lifeEngine, homeEngine, disabilityEngine];
  return profiling(funcs, userPersonalInfo);
};

module.exports = { fullEvaluation };
