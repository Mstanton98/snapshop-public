class LoginService {
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
    this.user = {};
    this.signedIn = false;

    this.$http.get('/api/token')
      .then((res) => {
        this.signedIn = res.data;
      })
      .catch(() => {
        Materialize.toast('Sign in required.', 4000);
      })
  }

  login() {
    return this.$http.post('/api/token', this.user)
      .then(() => {
        this.signedIn = true;
        this.$state.go('index');
        return Materialize.toast('Welcome!', 4000);
      })
      .catch(() => {
        Materialize.toast('Oops, something went wrong.', 4000);
      })
  }

  logout() {
    return this.$http.delete('/api/token', this.user)
      .then(() => {
        this.signedIn = false;
        return Materialize.toast('Signed out.', 4000);
      })
      .catch(() => {
        Materialize.toast('Oops, something went wrong.', 4000);
      })
  }
}

LoginService.$inject = ['$http', '$state'];

export default LoginService;
