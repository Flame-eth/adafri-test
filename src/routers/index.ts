import express from "express";
import campaignRoute from "./campaign.router";


const router = express.Router();

export default (): express.Router => {
campaignRoute(router);
  return router;
};