import { request } from "../../../network/index";

export default {
  method: {
    getHomedataApi() {
      return request({
        url: "/home/multidataa",
        method: "get",
      });
    },
  },
};
