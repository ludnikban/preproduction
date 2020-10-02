const vm = new Vue({
  el: '#app',
  data: {
    results: {},
    error: ''
  },
  mounted() {
    axios
      .get("http://api.github.com/users")
      .then(response => {
        this.results = response.data;
      })
      .catch(function (e) {
        this.error = e;
      });
  }
});
