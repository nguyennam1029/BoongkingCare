let handleLogin = (red, res) => {
    let email = req.body.email;
    let password = req.body.password;
    return res.status(200).json({
        message: 'hello wordl',
        email : email,
    })
}
module.exports ={
    handleLogin: handleLogin,
}