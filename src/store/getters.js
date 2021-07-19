export default {
  showCartlist(state) {
    return state.cartlist;
  },
  showCartlength(state, getters) {
    return getters.showCartlist.length;
    // return state.cartlist.length;
  },
  heji(state) {
    return state.cartlist
      .filter((item) => {
        return item.checked;
      })
      .reduce((preValue, cur) => {
        return preValue + cur.price * cur.count;
      }, 0)
      .toFixed(2);
  },
  selectcount(state) {
    return state.cartlist.filter((item) => {
      return item.checked;
    }).length;
  },
};
