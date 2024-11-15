import { NextFunction, Request, Response } from "express";
import { body, param, validationResult } from "express-validator";

export const createCampaignValidationRules: any = [
  body("title").isString().notEmpty(),
  body("description").isString().notEmpty(),
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
  param("id").isString().notEmpty(),
  body("title").isString().notEmpty().optional(),
  body("description").isString().notEmpty().optional(),
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

export const CampaignByIdValidationRules: any = [
  param("id").isString().notEmpty(),
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
