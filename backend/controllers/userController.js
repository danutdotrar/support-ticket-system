const registerUser = (req, res) => {
    res.send("Register Router");
};

const loginUser = (req, res) => {
    res.send("Login Router");
};

module.exports = { registerUser, loginUser };
