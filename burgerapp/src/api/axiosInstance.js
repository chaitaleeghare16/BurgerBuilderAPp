
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL : 'https://react-myburger-40c6b-default-rtdb.firebaseio.com'
})

export default axiosInstance