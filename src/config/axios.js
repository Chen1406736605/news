import axios from 'axios'
import store from './store'
// import router from './router'

//axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = "/"

//http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.user.token) {
      config.headers.Authorization = `Bearer ${store.state.user.token}`
    }
    return config
  }
)

export default axios