import { request } from "../index";

export function detailApi(iid) {
  return request({
    method: "get",
    url: "/detail",
    params: {
      iid: iid,
    },
  });
}
