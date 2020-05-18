import http from './request';
export function getMultiData() {
  return http({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return http({
    url:'home/data',
    params:{
      type,
      page
    }
  })

}
