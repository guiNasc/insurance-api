const validate = require("../middleware/validate.js");
const userPersonalInfoSchema = require("../schemas/user.personal.info.schema.js");
const insuranceService = require("../services/insurance.service");

/**
 * Receive http request and return a risk evaluation by calling insurance service.
 *
 * @param {*} request
 * @param {*} response
 * @returns {*} a json proposal
 */
const evaluate = (request, response) => {
  const proposal = insuranceService.calculate(request.body);
  if (!proposal) {
    throw new Error("Error on evaluation");
  }

  response.status(200).json(proposal);
};

module.exports = {
  evaluate: [validate({ body: userPersonalInfoSchema }), evaluate],
};
