let handleLogin = (red, res) => {
    return res.states(200).json({
        message: 'hello wordl'
    })
}
module.exports ={
    handleLogin: handleLogin,
}