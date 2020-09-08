import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://192.168.18.3:8000/api'
  // baseURL: 'http://localhost:5000/'
})

Vue.prototype.$axios = axiosInstance
