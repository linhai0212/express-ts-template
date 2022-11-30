import {Response} from "express";
const CryptoJS = require("crypto-js");

export function splitUrlParam<T>(param_str:string): T {
  const data_arr = param_str.split('&')
  const result_obj = {}
  for(let idx in data_arr) {
    const param_arr = data_arr[idx].split('=')
    if(param_arr.length == 2){
      // @ts-ignore
      result_obj[param_arr[0]]=param_arr[1]
    }
  }
  // @ts-ignore
  return result_obj
}

export function resSuccess(res: Response, data: any) {
  res.json({status: 'Success', data})
  res.end()
}

export function resFailed(res: Response, msg: any, code: string='NONE') {
  res.send({status: 'Failed', msg, code})
  res.end()
}

export function getCurrentDateTime() {
  const d_t = new Date();

  let year = d_t.getFullYear();
  let month = d_t.getMonth();
  let day = d_t.getDate();
  let hour = d_t.getHours();
  let minute = d_t.getMinutes();
  let second = d_t.getSeconds();

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

export const toEncrypt = (message: string, secret_key: string): string => {
  const enc = CryptoJS.Rabbit.encrypt(encodeURIComponent(message), secret_key).toString();
  const encrypt = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(enc))
  return encrypt
}

export const toDecrypt = (encrypted: string, secret_key: string): string => {
  try{
    let decData = CryptoJS.enc.Base64.parse(encrypted).toString(CryptoJS.enc.Utf8);
    let message = CryptoJS.Rabbit.decrypt(decData, secret_key).toString(CryptoJS.enc.Utf8);
    return decodeURIComponent(message)
  }catch (err){
    return ''
  }
}
