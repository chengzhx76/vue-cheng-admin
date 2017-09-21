import fetch from '@/utils/fetch'
import md5 from 'md5'

export function loginByUsername(username, password) {
  return fetch({
    url: '/login/96847042.json',
    method: 'get',
    params: {
      userName: username,
      password: md5(password),
      METHOD: 'GET'
    }
  })
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

