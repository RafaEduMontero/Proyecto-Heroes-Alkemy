import Axios from 'axios';

const TOKEN = '4393807120656369';

const heroeDB = Axios.create({
    baseURL: `https://superheroapi.com/api/${TOKEN}/search`
})

export default heroeDB;

// clienteAxios.interceptors.response.use(
//     response => {
//       console.log('Interceptor ejecutado');
//       return response;
//     }, error => {
//       const { response } = error;
//       console.log('Interceptor del error');
//       if (response.status === 401 && response.data.error && response.data.error.includes("expired")) {
//         auth.logOut();
//         window.location = '/';
//         Sweet.fire({
//           title: 'Uuups',
//           text: 'Tu sesión expiró, por favor vuelve a ingresar'
//         })
//       }
//       return Promise.r
//   export default {
//       isAuthenticated: () => {
//           return localStorage.getItem('token') ? true : false
//       },
//       logedIn: (token, role, id) => {
//           localStorage.setItem('token', token);
//           localStorage.setItem('role', role);
//           localStorage.setItem('id', id);
//       },
//       logOut: () => {
//           localStorage.removeItem('token');
//           localStorage.removeItem('role');
//           localStorage.removeItem('id');
//           localStorage.removeItem('username');
//       },
  
//       hasRole: role =