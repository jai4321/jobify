import User from "../models/User.js"
import {StatusCodes} from 'http-status-codes';

const register = async (req, res) => {

    const {name, email, password} = req.body;
    if(!name || !email || !password)
    {
        throw new e('Some Fields are Missing');
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