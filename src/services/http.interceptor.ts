import axios from 'axios';
import { useStatusApp } from '../stores/app-status.store';

// store.loadingState

axios.defaults.headers.post['Content-Type'] = 'application/json';
const API = axios.create({ baseURL: '/' });

API.interceptors.request.use(async (req) => {
  if (req.url?.includes('/foo')) {
    let json = await API.get('configuration.json');
    req.params = {
      ...req.params,
      appid: json.data.weather.key
    }
  }
  const loading = useStatusApp();
  // loading.loadingState
  loading.setLoading(true);
  // req.headers?
  return req;
});
API.interceptors.response.use((res) => {
  const loading = useStatusApp();
  loading.setLoading(false);
  return res;
}, 
err => {
  const loading = useStatusApp();
  loading.setLoading(false);
});
class ApiService {
  static async get(url: string, options?: any) {
    
    if (url.includes('/foo')) {
      
    }
    return API.get(url, { ...options });
  }
  static async post(url: string, options?: any) {
    return API.post(url, { ...options });
  }
}
export default ApiService;
export {API};
