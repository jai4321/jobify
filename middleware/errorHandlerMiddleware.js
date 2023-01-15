import {StatusCodes} from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
    // console.log(err)
    const defaultError = {
        StatusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something Went Wrong. Try Again Later'
    }
    if(err.name == 'ValidationError')
    {
        defaultError.StatusCode = StatusCodes.BAD_REQUEST;
        defaultError.msg = Object.values(err.errors).map((item)=> item.message ).join(',')
    }
    if(err.code && err.code==11000)
    {
        defaultError.StatusCode = StatusCodes.BAD_REQUEST;
        defaultError.msg = `${Object.values(err.keyValue.email).join('')} is already registered`
        // defaultError.msg = `${Object.Keys(err.keyValue)} is already registered`
    }
    res.status(defaultError.StatusCode).json({msg: defaultError.msg})
    // res.status(defaultError.StatusCode).json({msg: err})
}

export default errorHandlerMiddleware;