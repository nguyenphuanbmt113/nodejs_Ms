import {
  createUser,
  deleteUser,
  getAll,
  updateUser,
} from "../service/userService";

const handleCreateUser = async (req, res) => {
  try {
    console.log(req.body);
    const response = await createUser(req.body);
    console.log("response", response);
    return res.status(200).json({
      EC: response.EC,
      EM: response.EM,
    });
  } catch (error) {
    console.log(">>>>>>>>check error:", error);
    return res.status(500).json({
      EC: -1,
      EM: "something wrong with server.",
    });
  }
};
const handleGetAllUser = async (req, res) => {
  try {
    const response = await getAll();
    console.log("response", response);
    return res.status(200).json({
      EC: response.EC,
      EM: response.EM,
      data: response.data,
    });
  } catch (error) {
    console.log(">>>>>>>>check error:", error);
    return res.status(500).json({
      EC: -1,
      EM: "something wrong with server.",
    });
  }
};
const handleDeleteUser = async (req, res) => {
  try {
    let userdelete = await deleteUser(req.body.id);
    return res.status(200).json({
      EM: userdelete.EM,
      EC: userdelete.EC,
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server",
      EC: "-1",
    });
  }
};
const handleUpdateUser = async (req, res) => {
  try {
    const result = await updateUser(req.body);
    return res.status(200).json({
      EM: result.EM,
      EC: result.EC,
    });
  } catch (error) {
    console.log(">>>>>>>check error:", error);
    return res.status(500).json({
      EM: "error from server",
      EC: "-1",
    });
  }
};

export {
  handleCreateUser,
  handleGetAllUser,
  handleDeleteUser,
  handleUpdateUser,
};