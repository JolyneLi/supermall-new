import { request } from "../index";

export function getHomedata() {
  return request({
    url: "/home/multidata",
    method: "get",
  });
}

export function getHomeGoodsApi(type, page) {
  return request({
    url: "/home/data",
    method: "get",
    params: {
      type,
      page,
    },
  });
}
