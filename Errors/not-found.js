import {StatusCodes} from 'http-status-codes';
import CustomAPIErrors from './custom-api.js';
class NotFoundError extends CustomAPIErrors{
    constructor(message){
        super(message)
        this.statusCodes = StatusCodes.BAD_REQUEST;
    }
}

export default NotFoundError;