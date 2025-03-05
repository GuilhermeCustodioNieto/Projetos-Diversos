import { HttpStatus } from '@nestjs/common';

const exceptions = {
  notFoundError: {
    statusCode: HttpStatus.NOT_FOUND,
    message: `the requested resource was not found`,
    error: 'Not Found',
  },
  internalServerError: {
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    message: `Has been a internal server error`,
    error: 'Internal Server Error',
  }
}

export default exceptions