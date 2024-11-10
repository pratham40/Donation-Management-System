import User from "../models/user.model.js";
import AppError from "../utils/error.util.js";
import cloudinary from "cloudinary";
import fs from "fs"


const cookieOption = {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    secure: true,
};

const register = async (req, res, next) => {
    try {
        const { fullName, email, password, dob } = req.body;
    
        if (!fullName || !email || !password || !dob) {
            return next(new AppError("All Field are required", 400));
        }
    
        const userExist = await User.findOne({ email });
    
        if (userExist) {
            return next(new AppError("User already exist", 400));
        }

        const role = req.body.role || "donor";

        // Check if user is at least 18 years old

        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        if (age < 18) {
            return next(new AppError("User must be at least 18 years old", 400));
        }
    
        const user = await User.create({
            fullName,
            email,
            password,
            role,
            dob,
            avatar: {
                public_id: email,
                secure_url:
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            },
        });
    
        if (!user) {
            return next(
                new AppError("User registration failed please try again !!!", 400)
            );
        }
    
        // TODO : File Upload
        if (req.file) {
            console.log(req.file);
            try {
                const result = cloudinary.v2.uploader.upload(req.file.path, {
                    folder: "lms",
                    width: 250,
                    height: 250,
                    gravity: "faces",
                    crop: "fill",
                });
    
                if (result) {
                    user.avatar.public_id = (await result).public_id;
                    user.avatar.secure_url = (await result).secure_url;
    
                    //  Remove file from server
    
                    fs.unlinkSync(req.file.path)
                }
            } catch (error) { 
                return next(new AppError(error || 'File not uploaded try again !!!',500))
            }
        }
    
        await user.save();
    
        user.password = undefined;
    
        const token = await user.generateJWTToken();
    
        res.cookie("token", token, cookieOption);

        if (user.role === "ADMIN") {
            res.status(201).json({
                success: true,
                message: "Admin registered successfully",
                user: user,
            });
            return;
        }

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: user,
        });
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};


const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new AppError("all field are required", 400));
        }

        const user = await User.findOne({
            email,
        }).select("+password");

        if (!user || !user.comparePassword(password)) {
            return next(new AppError("email or password does not match", 400));
        }

        const token = await user.generateJWTToken();

        user.password = undefined;

        res.cookie("token", token, cookieOption);
        console.log('====================================');
        console.log(user);
        console.log('====================================');

        res.status(200).json({
            success: true,
            message: "user logged in successfully",
            user,
        });
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};

const logout = (req, res, next) => {
    try {
        res.cookie("token", null, {
            secure: true,
            maxAge: 0,
            httpOnly: true,
        });

        res.status(200).json({
            success: true,
            message: "user logout successfully",
        });
    } catch (error) {
        return next(new AppError(error.message, 400));
    }
};

export  {
    register,
    login,
    logout
};