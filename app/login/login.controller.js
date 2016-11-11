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

  logout() {
    return this.loginSvc.logout();
  }

  isUserAuth() {
    return this.loginSvc.signedIn;
  }
}

LoginCtrl.$inject = ['loginService'];

export default LoginCtrl;
