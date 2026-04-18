import {NextFunction, Request, Response} from 'express';

export type Handler = {
  (request: Request, response: Response, next: NextFunction): void;
};

export type Methods =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'options';
