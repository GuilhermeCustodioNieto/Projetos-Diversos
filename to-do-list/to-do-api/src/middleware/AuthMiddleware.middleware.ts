import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.headers.authorization?.split(' ')[1]
            if (!token) {
                throw new UnauthorizedException(`Token was not provided`)
            }

            const secret = process.env.JWT_SECRET_KEY || 'secret_key'
            const decoded = jwt.verify(token, secret)

            req['user'] = decoded
            next()
        } catch (err) {
            throw new UnauthorizedException(`Invalid token`)
        }
    }
}