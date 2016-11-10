class LoginService {
  constructor($http) {
    this.$http = $http;
    this.user = {};
  }

  login() {
    return this.$http.post('/token', this.user)
      .then(() => {
        return Materialize.toast('Welcome!', 4000);
      })
  }
}

LoginService.$inject = ['$http'];

export default LoginService;
