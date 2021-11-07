import Axios from 'axios';
import qs from 'qs';
import {
  useAlert
} from 'react-alert'

export function userRegister(username, password) {
  const params = qs.stringify({
    username,
    password
  })
  Axios.post('https://codeforfood.io/auth/login', {
    data: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
  .then((response) => {
    const alert = useAlert()
    alert.show('Login Success');
    console.log(response);
  });
}
export function userLogin(username, password) {
  const params = qs.stringify({
    username,
    password
  })
  Axios.post('https://codeforfood.io/auth/login', {
    data: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
  .then((response) => {
    const alert = useAlert()
    alert.show('Login Success');
    console.log(response);
  });
}
