import axios from 'axios'
export default function (config) {
  const inst = axios.create({
    baseURL:'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  });
  inst.interceptors.response.use((res)=>{
    return res.data
  },error => {})
  return inst(config);
}
