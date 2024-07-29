import { NextFunction, Request, Response } from 'express'
import { httpCodes } from '../utils'


// 404 handler
export const NotFoundHandler =  (req: Request, res: Response, next: NextFunction) => {
    const error = new Error("route not founded") as StatusError
    error['status'] = httpCodes.NOT_FOUND
    next(error)
}

//Global Error
export const GlobalErrorHandler = (error: StatusError, req: Request, res: Response, next: NextFunction) => {
    console.log(error.message || "שגיא בסרבר, נא לנסות שנית")
    res.status(error.status || 500).json( {continueWork: false, message: error.message || "שגיא בסרבר, נא לנסות שנית"} )
}

interface StatusError extends Error {
    status?: number
}