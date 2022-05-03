import ncrypt from "ncrypt-js";

const pwd = process.env.CRYPTO_PWD
const ncryptObject = new ncrypt(pwd)

export const encryptData = async(data) => {
    return ncryptObject.encrypt(data)
}

export const decryptData = async(data) => {
    return ncryptObject.decrypt(data)
}