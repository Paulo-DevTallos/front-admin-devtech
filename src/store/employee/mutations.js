export default {
  LOGIN(state, payload) {
    state.employeeName = payload.employee_name;
    state.employeeEmail = payload.employee_email;
    state.employeeRoles = payload.roles;
    state.employeeId = payload.id;
    state.employeeRegistration = payload.registration;
  }
}
