class SignupService {
  constructor($http) {
    this.$http = $http;
    this.user = {};
  }

  signup() {
    return this.$http.post('/api/users', this.user)
      .then(() => {
        Materialize.toast('Succesfully created an account!', 4000);
      })
      .catch(() => {
        Materialize.toast('Oops, something went wrong. Please try again.', 4000);
      })
  }
}

SignupService.$inject = ['$http'];

export default SignupService;
