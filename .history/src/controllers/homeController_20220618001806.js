
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getLogin = (req, res) => {
    return res.render('login.ejs');
}
// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getLogin: getLogin,
}
