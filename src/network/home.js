import http from './request';
export function getMultiData() {
  return http({
    url:'/home/multidata'
  })
}
