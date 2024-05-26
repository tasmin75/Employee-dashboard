// import AdminModel from "../models/admin.model.js";

export const adminLogin = async (req, res) => {
    try {
        const { userName, password } = req.body;

        if (!userName || !password) {
            return res.status(400).json({ message: "Please fill all fields" });
        }
        const adminData = {
            userName: 'admin',
            password: 'admin@123',
            
        };
        if (userName === adminData.userName && password === adminData.password) {
            return res.status(200).json({ message: "Login Successful",adminData });
        } else {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
       
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
