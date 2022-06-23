let handleLogin = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if(!email || !password) {
        return res.status(500).json({
            arrCode: 1,
            message: ' Missing inputs paramater'
        })
    }
    return res.status(200).json({
            arrCode: 0,

        message: 'hello wordl',
        yourEmail : email,
    })
}
module.exports ={
    handleLogin: handleLogin,
}