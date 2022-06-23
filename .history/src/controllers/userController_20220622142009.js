let handleLogin = (red, res) => {
    return res.status(200).json({
        message: 'hello wordl'
    })
}
module.exports ={
    handleLogin: handleLogin,
}