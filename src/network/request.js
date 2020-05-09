import axios from 'axios'
export default function (config) {
  const inst = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout: 5000
  });
  inst.interceptors.response.use((res)=>{
    return res.data
  },error => {})
  return inst(config);
}
