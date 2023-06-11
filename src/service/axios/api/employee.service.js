import { ApiService } from "../http";

export default {
  login: (data) => {
    return ApiService.post('/employee/auth', data);
  }
}
