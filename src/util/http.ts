import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
    timeout: 15*1000, // 请求超时时间
    headers: { 'content-type': 'application/json;charset=UTF-8' }
})

function get(url:any, params:any) {
    return new Promise((resolve, reject) => {
        service.get(url, {
          params: params
        })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  function post(url:any, params:any) {
    return new Promise((resolve, reject) => {
        service.post(url, params)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  const http = { post, get }

export default http