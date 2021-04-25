import request from '@/utils/request';


export async function login(data) {
  return request('/v1/user/auth', {
    method: 'POST',
    params: data
  });
}