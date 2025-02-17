import {HttpStatus } from '@nestjs/common';

const exceptions = {
    notFoundError:{
        statusCode: HttpStatus.NOT_FOUND,
        message: `the requested resource was not found`,
        error: 'Not Found',
      },
    internalServerError: {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR  ,
        message: `the requested resource was not found`,
        error: 'Not Found',
      }
}

export default exceptions