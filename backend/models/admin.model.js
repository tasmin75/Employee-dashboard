import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    userName: {
        type: String,
        default: 'admin',
    },
    password: {
        type: String,
        required: true,
        default: 'admin123',
    },
    token: {
        type: String,
        default: 'admin-token',
    },
}, {
    timestamps: true,
});

const AdminModel = mongoose.model('Admin', adminSchema);

export default AdminModel;

