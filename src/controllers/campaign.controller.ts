import * as CampaignService from "../services/campaign.service";
import type { Request, Response } from "express";

/**
 * The function `createCampaign` asynchronously creates a campaign using data from the request and
 * returns a response with the created campaign or an error message.
 * @param {Request} req - Request object containing the data for creating a campaign.
 * @param {Response} res - The `res` parameter in the `createCampaign` function is an instance of the
 * Response object in Express.js. It is used to send the HTTP response back to the client. In this
 * function, it is used to send a JSON response with the.status code, message, data, and error
 * information
 * @returns The `createCampaign` function is returning a JSON response with a.status code, message,
 * data (campaign object), and a flag indicating whether there was an error or not. If the campaign
 * creation is successful, it returns a 201.status with the message "Campaign created successfully" and
 * the campaign data. If an error occurs during the process, it returns a 500.status with the message
 * "An
 */
export const createCampaign = async (req: Request, res: Response): Promise<any> => {
  try {
    const campaign = await CampaignService.createCampaign(req.body);
    return res.status(201).json({
      message: "Campaign created successfully",
      data: campaign,
      hasError: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred",
      error: error,
      hasError: true,
    });
  }
};

/**
 * The function `getCampaigns` retrieves campaigns using CampaignService and returns a JSON response
 * with the retrieved data or an error message.
 * @param {Request} req - The `req` parameter in the `getCampaigns` function stands for the request
 * object, which contains information about the HTTP request made to the server. This object includes
 * details such as the request headers, query parameters, body content, and more. It is typically
 * provided by the Express.js framework when
 * @param {Response} res - The `res` parameter in the `getCampaigns` function is an object representing
 * the HTTP response that an Express.js route handler sends when it receives an HTTP request. It allows
 * you to send back a response to the client making the request. In this case, the `res` object is used
 * @returns The `getCampaigns` function returns a JSON response with a message indicating the success
 * or failure of retrieving campaigns. If the retrieval is successful, it returns a.status of 200 with
 * the message "Campaigns retrieved successfully" along with the retrieved campaigns data and
 * `hasError` set to false. If an error occurs during the retrieval process, it returns a.status of 500
 * with the message "
 */
export const getCampaigns = async (req: Request, res: Response): Promise<any> => {
  try {
    const campaigns = await CampaignService.getCampaigns();
    return res.status(200).json({
      message: "Campaigns retrieved successfully",
      data: campaigns,
      hasError: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred",
      error: error,
      hasError: true,
    });
  }
};

/**
 * The function `getCampaignById` retrieves a campaign by its ID and returns a response with the
 * campaign data or an error message.
 * @param {Request} req - The `req` parameter in the `getCampaignById` function stands for the request
 * object, which contains information about the HTTP request that was made. This object includes
 * details such as the request headers, parameters, body, query parameters, and more. It is typically
 * provided by the Express.js framework when
 * @param {Response} res - The `res` parameter in the `getCampaignById` function is an object
 * representing the HTTP response that an Express.js route handler sends when it receives an HTTP
 * request. It allows you to send back data, set headers, and control the response.status.
 * @returns The `getCampaignById` function is returning a JSON response with.status codes and messages
 * based on the outcome of the operation. If the campaign is found, it returns a 200.status with the
 * message "Campaign retrieved successfully" and the campaign data. If the campaign is not found, it
 * returns a 404.status with the message "Campaign not found". If an error occurs during the process,
 * it
 */
export const getCampaignById = async (req: Request, res: Response) : Promise<any> => {
  try {
    const campaign = await CampaignService.getCampaignById(req.params.id);
    if (!campaign) {
      return res.status(404).json({
        message: "Campaign not found",
        hasError: true,
      });
    }
    return res.status(200).json({
      message: "Campaign retrieved successfully",
      data: campaign,
      hasError: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred",
      error: error,
      hasError: true,
    });
  }
};

/**
 * The function `updateCampaign` in TypeScript updates a campaign and returns appropriate responses
 * based on the outcome.
 * @param {Request} req - The `req` parameter in the `updateCampaign` function stands for the request
 * object, which contains information about the HTTP request made to the server. This object includes
 * details such as the request headers, parameters, body, query parameters, and more. In this context,
 * `req` is of type
 * @param {Response} res - The `res` parameter in the `updateCampaign` function is an object
 * representing the HTTP response that an Express.js route handler sends when it receives an HTTP
 * request. It allows you to send back data, set.status codes, and more to the client making the
 * request.
 * @returns The `updateCampaign` function returns a JSON response with different messages and data
 * based on the outcome of the update operation.
 */
export const updateCampaign = async (req: Request, res: Response) :  Promise<any> => {
  try {
    const campaign = await CampaignService.updateCampaign(
      req.params.id,
      req.body
    );
    if (!campaign) {
      return res.status(404).json({
        message: "Campaign not found",
        hasError: true,
      });
    }
    return res.status(200).json({
      message: "Campaign updated successfully",
      data: campaign,
      hasError: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred",
      error: error,
      hasError: true,
    });
  }
};

/**
 * The function `deleteCampaign` handles the deletion of a campaign and returns appropriate responses
 * based on the outcome.
 * @param {Request} req - The `req` parameter in the `deleteCampaign` function is an object
 * representing the HTTP request. It contains information about the request made to the server, such as
 * the request headers, parameters, body, and other details. In this context, `req.params.id` is used
 * to access the `
 * @param {Response} res - The `res` parameter in the `deleteCampaign` function is the response object
 * that will be used to send the response back to the client making the request. It allows you to set
 * the.status code, send JSON data, and handle errors or success messages based on the outcome of the
 * operation.
 * @returns The deleteCampaign function returns a JSON response with a.status code and message based on
 * the outcome of the deletion operation. If the campaign is successfully deleted, it returns a 200
 *.status with a success message and the deleted campaign data. If the campaign is not found, it
 * returns a 404.status with a message indicating that the campaign was not found. If an error occurs
 * during the deletion process, it
 */
export const deleteCampaign = async (req: Request, res: Response) :  Promise<any> => {
  try {
    const campaign = await CampaignService.deleteCampaign(req.params.id);
    if (!campaign) {
      return res.status(404).json({
        message: "Campaign not found",
        hasError: true,
      });
    }
    return res.status(200).json({
      message: "Campaign deleted successfully",
      data: campaign,
      hasError: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred",
      error: error,
      hasError: true,
    });
  }
};
