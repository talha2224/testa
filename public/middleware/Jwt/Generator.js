const jwt = require('jsonwebtoken')
let token = "9df7648e0c4a52b2e5d82d5a92e7bb1f4a4ad3a192fc27dbd1ef3d5a5f245a91"
const tokenGenerator = async(payloadObject)=>{
    let createdToken = await jwt.sign({ payloadObject },token);
    return createdToken
}

module.exports = {tokenGenerator}