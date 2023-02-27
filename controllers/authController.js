import User from "../models/User.js"
import {StatusCodes} from 'http-status-codes';
import {BadRequestError} from '../errors/index.js'


const register = async (req, res) => {
    console.log(req);
    const {name, email, password} = req.body;
    if(!name || !email || !password)
    {

        throw new BadRequestError('Some Fields are Missing');
    }
    const userAlreadyExist = await User.findOne({email});
    if(userAlreadyExist)
    {
        throw new BadRequestError('User Already Exist');
    }
    const user = await User.create(req.body);
    res.status(StatusCodes.OK).json({user});
}
const login = async (req, res) => {
    res.send('login User');
}
const updateUser = async (req, res) => {
    res.send('udpdateUser');
}

export {register,login,updateUser}