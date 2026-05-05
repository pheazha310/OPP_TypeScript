import { Response } from "express";

class BaseController {
  protected ok(res: Response, data: unknown, message?: string) {
    return res.status(200).json({
      success: true,
      message,
      data,
    });
  }

  protected created(res: Response, data: unknown, message?: string) {
    return res.status(201).json({
      success: true,
      message,
      data,
    });
  }

  protected notFound(res: Response, message = "Resource not found") {
    return res.status(404).json({
      success: false,
      message,
    });
  }

  protected fail(res: Response, error: unknown, fallbackMessage = "Internal server error") {
    const message = error instanceof Error ? error.message : fallbackMessage;

    return res.status(500).json({
      success: false,
      message,
    });
  }
}

export default BaseController;
