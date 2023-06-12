import { createStore } from 'vuex'
import employeeStore from './employee/employee_store'

export const store = createStore({
  modules: {
    employeeStore
  }
})
