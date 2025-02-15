import {HttpStatus } from '@nestjs/common';

const exceptions = {
    notFound: {
        statusCode: HttpStatus.NOT_FOUND,
        'message': 'The task has been not found'
    },
    basicError: {
        message: 'There was an error in the request. Try again.'
    }
}

export default exceptions