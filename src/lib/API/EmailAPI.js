import Axios from 'axios';
import qs from 'qs';
import {
  useAlert
} from 'react-alert'

export function sendEmail(name, email, message) {
  const params = qs.stringify({
    name, //gave the values directly for testing
    email,
    message
  });
  Axios.post('https://codeforfood.io/auth/send', {
    data: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
  .then((response) => {
    const alert = useAlert()
    alert.show('Email Sent To developer@codeforfood.io');
    console.log(response);
  });
}
