export default {
  LOGIN(state, payload) {
    console.log(state)
    state.employeeName = payload.employeeName;
    state.employeeEmail = payload.employeeEmail;
    state.employeeRoles = payload.roles;
    state.employeeRegistration = payload.registration;
  }
}
