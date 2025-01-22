import mongoose from "mongoose"

const blackListTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '24h' // Token will be removed after 24 hrs
    }
});

const BlackListToken = mongoose.model('BlackListToken', blackListTokenSchema);

export default BlackListToken;