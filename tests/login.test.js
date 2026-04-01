import http from 'k6/http'
import { sleep, check } from 'k6'
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))

export const options = {
  vus: 1,
  duration: '5s',
  thresholds: {
    http_req_duration: ['p(90)<3000', 'max<5000']
  }
};

export default function () {
  const url = 'http://localhost:3000/login';
  
  console.log(postLogin)
  const payload = JSON.stringify(postLogin);

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'Validar que o status é 200': (r) => r.status === 200,
    'Validar que o token é string': (r) => typeof(r.json().token == 'string')
  });

  sleep(1);
}