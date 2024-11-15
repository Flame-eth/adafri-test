import type { Router } from "express";
import * as CampaignController from "../controllers/campaign.controller";
import * as CampaignMiddleware from "../middlewares/campaign.middleware";

export default (router: Router) => {
  /* This code snippet is defining a POST route for creating a campaign in an Express router. When a
 POST request is made to the "/campaign" endpoint, it will go through the middleware function
 `CampaignMiddleware.createCampaignValidationRules` first to validate the request body for creating
 a campaign. If the validation passes, the request will then be handled by the
 `CampaignController.createCampaign` function, which is responsible for creating the campaign. */
  router.post(
    "/campaign",
    CampaignMiddleware.createCampaignValidationRules,
    CampaignController.createCampaign
  );

  /* `router.get("/campaign", CampaignController.getCampaigns);` is defining a GET route for retrieving
all campaigns in an Express router. When a GET request is made to the "/campaign" endpoint, it will
be handled by the `CampaignController.getCampaigns` function, which is responsible for fetching and
returning all campaigns. */
  router.get("/campaign", CampaignController.getCampaigns);

  /* This code snippet is defining a GET route for retrieving a specific campaign by its ID in an Express
router. When a GET request is made to the "/campaign/:id" endpoint (where ":id" is a placeholder for
the specific campaign ID), it will first go through the middleware function
`CampaignMiddleware.CampaignByIdValidationRules` to validate the request parameters. If the
validation passes, the request will then be handled by the `CampaignController.getCampaignById`
function, which is responsible for fetching and returning the campaign with the specified ID. */
  router.get(
    "/campaign/:id",
    CampaignMiddleware.CampaignByIdValidationRules,
    CampaignController.getCampaignById
  );

  /* This code snippet is defining a PUT route for updating a specific campaign by its ID in an Express
 router. When a PUT request is made to the "/campaign/:id" endpoint (where ":id" is a placeholder
 for the specific campaign ID), it will first go through the middleware function
 `CampaignMiddleware.updateCampaignValidationRules` to validate the request body for updating the
 campaign. If the validation passes, the request will then be handled by the
 `CampaignController.updateCampaign` function, which is responsible for updating the campaign with
 the specified ID. */
  router.put(
    "/campaign/:id",
    CampaignMiddleware.updateCampaignValidationRules,
    CampaignController.updateCampaign
  );

  /* This code snippet is defining a DELETE route for deleting a specific campaign by its ID in an
  Express router. When a DELETE request is made to the "/campaign/:id" endpoint (where ":id" is a
  placeholder for the specific campaign ID), it will first go through the middleware function
  `CampaignMiddleware.CampaignByIdValidationRules` to validate the request parameters. If the
  validation passes, the request will then be handled by the `CampaignController.deleteCampaign`
  function, which is responsible for deleting the campaign with the specified ID. */
  router.delete(
    "/campaign/:id",
    CampaignMiddleware.CampaignByIdValidationRules,
    CampaignController.deleteCampaign
  );
};
