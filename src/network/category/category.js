import { request } from "../index";

export function getcategoryApi() {
  return request({
    url: "/category",
    method: "get",
  });
}

export function getSubcategoriesApi(index) {
  return request({
    url: "/subcategory",
    method: "get",
    params: {
      maitKey: index,
    },
  });
}

export function getcategoryDetailApi(index, type) {
  return request({
    url: "/subcategory/detail",
    method: "get",
    params: {
      miniWallkey: index,
      type,
    },
  });
}
