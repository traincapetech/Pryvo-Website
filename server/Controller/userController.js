// import userSchema from "../Models/user.js";

// export const getUser = async (req, res) => {
//   try {
//     const users = await userSchema.find();
//     res.status(200).json({ success: true, data: users });
//     } catch (error) {
//     console.error("Get user error:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   } 
// };

// export const createUser = async (req, res) => {
//   try {
//     const newUser = new userSchema(req.body);
//     await newUser.save();
//     res.status(201).json({ success: true, data: newUser });
//   } catch (error) {
//     console.error("Create user error:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// export const updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedUser = await userSchema.findByIdAndUpdate(id, req
// .body, { new: true });
//     if (!updatedUser) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }   
//     res.status(200).json({ success: true, data: updatedUser });
//     } catch (error) {
//     console.error("Update user error:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   } 
// };

// export const deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedUser = await userSchema.findByIdAndDelete(id);
//     if (!deletedUser) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }
//     res.status(200).json({ success: true, message: "User deleted successfully" });
//   }
//     catch (error) {
//     console.error("Delete user error:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

