import db from "../models/index"
// import bcrypt from 'bcryptjs';
let handleUserLogin = (email, password) => {
 return new Promise(async(resolve, reject) => {
    try {
        let userData ={};
        let isExist = await checkUserEmail(email);
        if(isExist) {
            // let user = await db.User.findOne({
            //     where: {email: userEmail}
            // });
            resolve();
            // if(user) {
            //   let check= await  bcrypt.compareSync(password, user.password); 
            //     if(check) {
            //         userData.errCode = 0;
            //         userData.errMessage='ok',
            //         userData.user= user;
            //     }else {
            //         userData.errCode = 3;
            //         userData.errMessage='wrong password',
            //         userData.user= user;
            //     }
            // } else{
            // userData.errCode = 2;
            // userData.errMessage ='ko tim thay ng dung'
            // }
            
        } else {
            userData.errCode = 1;
            userData.errMessage =`Your's Email isn't exitst in your system`;
            resolve(userData)
        }
    } catch (e) {
        reject(e)
    }
 })
}



let checkUserEmail =(userEmail) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {email : userEmail}
            })
            if(user) {
                resolve(true)
            }else {
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