import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class QueryExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const detail = exception.message;

    let messageStart = 'An error ocurred in query request.';
    if (typeof detail === 'string' && detail.includes('Duplicate entry')) {
      messageStart = detail?.split(' for key')[0] + '.';
    }

    response.status(400).json({
      statusCode: 400,
      message: messageStart,
    });
  }
}
