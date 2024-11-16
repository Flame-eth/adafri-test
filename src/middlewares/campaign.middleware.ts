import { NextFunction, Request, Response } from "express";
import { body, param, validationResult } from "express-validator";

export const createCampaignValidationRules: any = [
  body("title").isString().notEmpty().escape(),
  body("description").isString().notEmpty().escape(),
  body("status")
    .isString()
    .notEmpty()
    .isIn(["ACTIVE", "INACTIVE"])
    .optional()
    .escape(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array(),
        hasError: true,
      });
    }
    next();
  },
];

export const updateCampaignValidationRules: any = [
  param("id").isString().notEmpty().escape(),
  body("title").isString().notEmpty().optional().escape(),
  body("description").isString().notEmpty().optional(),
  body("status")
    .isString()
    .notEmpty()
    .isIn(["ACTIVE", "INACTIVE"])
    .optional()
    .escape(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array(),
        hasError: true,
      });
    }
    next();
  },
];

export const campaignByIdValidationRules: any = [
  param("id").isString().notEmpty().escape(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array(),
        hasError: true,
      });
    }
    next();
  },
];

export const getCampaignsValidationRules: any = [
  param("status")
    .isString()
    .notEmpty()
    .toUpperCase()
    .isIn(["ACTIVE", "INACTIVE"])
    .optional()
    .escape(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array(),
        hasError: true,
      });
    }
    next();
  },
];
