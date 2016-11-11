class SignupCtrl {
  constructor(signupSvc) {
    this.signupSvc = signupSvc;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }

  userSignup() {
    this.signupSvc.user.firstName = this.firstName;
    this.signupSvc.user.lastName = this.lastName;
    this.signupSvc.user.email = this.email;
    this.signupSvc.user.password = this.password;
    this.signupSvc.signup();
  }
}

SignupCtrl.$inject = ['signupService']

export default SignupCtrl;
