export const deleteUserController = async function (req, res) {
  try {
    const { email, username } = JSON.parse(req.user);
    console.log(email, username);
  } catch (error) {
    return res
      .status(200)
      .json({ success: false, error: true, message: error.message });
  }
};
