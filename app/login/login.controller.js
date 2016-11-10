class LoginCtrl {
  constructor(loginSvc) {
    this.loginSvc = loginSvc;
    this.email = '';
    this.password = '';
  }

  userLogin() {
    this.loginSvc.user.email = this.email;
    this.loginSvc.user.password = this.password;
    this.loginSvc.login();
  }
}

LoginCtrl.$inject = ['loginService'];

export default LoginCtrl;
