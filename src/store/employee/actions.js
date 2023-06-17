import employeeService from '../../service/axios/api/employeeService';

export default {
  async login({ commit }, data) {
    await employeeService.login(data).then(res => {

      if (res.status === 200 && res.data.token) {
        const responseData = {
          token: res.data.token,
          session_id: res.data.employee._id,
          employeeName: res.data.employee.employee_name,
          employeeEmail: res.data.employee.employee_email,
          roles: res.data.employee.roles,
          registration: res.data.employee.registration,
        }

        localStorage.setItem("token", responseData['token'])
        localStorage.setItem("session_id", responseData['session_id'])

        commit("LOGIN", responseData);

        window.location.replace("/home")
      }
    })
  }
}
