import db from "../models/index"
let handleUserLogin = (emai, password) => {
 return new Promise(async(resolve, reject) => {
    try {
        let userData ={};
        let isExist = await checkUserEmail(email);
        if(isExist) {
            resolve()
        } else{
            userData.errCode = 1;
            userData.errMessage ='Email k ton tai'
        }
    } catch (e) {
        reject(e)
    }
 })
}
let checkUserEmail =(email) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {email : userEmail}
            })
            if(user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin
}