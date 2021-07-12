export default {
  method: {
    getHomedatalist() {
      this.getHomedataApi().then((res) => {
        this.homedatalist = res.data;
      });
    },
  },
};
