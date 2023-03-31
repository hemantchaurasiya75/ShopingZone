const User = require('../models/User');

class UserController {
    // get user profile
    async getProfile(req, res) {
        try {
            const user = await User.findById(req.user._id);
            if (user) {
                const userData = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    createdAt: user.createdAt,
                }
                res.status(200).json(userData);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // update user profile
    async updateProfile(req,res){
        try {
            const user = await User.findById(req.user._id);
            if(user){

            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // 
}