import employeeService from '../../service/axios/api/employee.service';

export default {
  async login({ commit }, data) {
    await employeeService.login(data)
      .then(res => {
        console.log(res)
      })
  }
}
