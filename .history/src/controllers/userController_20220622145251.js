import userService from "../services/userService"
let handleLogin = async(req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if(!email || !password) {
        return res.status(500).json({
            arrCode: 1,
            message: ' Missing inputs paramater'
        })
    }

    let userData = await userService.handleUserLogin(email, password)

    return res.status(200).json({
            userData
    })
}
module.exports ={
    handleLogin: handleLogin,
}