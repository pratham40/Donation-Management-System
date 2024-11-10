import { Schema } from "mongoose";
import bcrypt from "bcryptjs"
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        minLength:[5,"Name must be atleast 5 character"],
        maxLength:[15,"Name must be atmost 15 character"],
        lowercase:true,
        trim:true,
    },
    email: {
        type: String,
        required:[true,'Email is required'],
        unique:true,
        lowercase:true,
        trim:true,
        match:[
            /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/gm,
            "please enter valid email"
        ]
    },
    password: {
        type: String,
        required:[true,'password is required'],
        minLength:[5,"password must be atleast 5 character"],
        select:false
    },
    avatar:{
        public_id:{
            type:String,

        },
        secure_url:{
            type:String,

        }
    },
    dob:{
        type: Date,
        required:[true,'Date of Birth is required']
    },
    role: {
        type: String,
        enum:['donor','admin'],
        default:'donor'
    },
    phoneNumber: {
        type: String,
        unique: true,
        trim: true,
        sparse: true,
        validate: {
            validator: function(v) {
                return /^\+?([ -]?\d)+$/.test(v);
            },
            message: "Please enter a valid phone number"
        },
    },
},{
    timestamps:true
})

userSchema.pre('save',async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    this.password=await bcrypt.hash(this.password,10)
})


userSchema.methods={
    generateJWTToken:async function () {
        return await jwt.sign(
            {
                id:this._id,
                email:this._email,
                subscription:this.subscription,
                role:this.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn:process.env.JWT_EXPIRY
            }
        )
    },
    comparePassword:async function (plainTextPassword) {
        return await bcrypt.compare(plainTextPassword,this.password)
    },
    generatePasswordResetToken:async function () {
        const resetToken = crypto.randomBytes(20).toString('hex');
        this.forgotPasswordToken=crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex')

        this.forgotPasswordExpiry=Date.now()+15*60*1000 // 15 min from now

        return resetToken
    }
}

const User=mongoose.model('User',userSchema)

export default User