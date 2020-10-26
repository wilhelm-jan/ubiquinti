import Page from "./page";

class LoginPage extends Page {
  open() {
    /* "https://unms-wilhelm.ubncloud.com/" */
    super.open(`https://${process.argv[5]}.com/`);
  }

  get userInpt() {
    return $('[name="username"]');
  }

  get passInpt() {
    return $('[name="password"]');
  }

  get signBtn() {
    return $(".busyToggle__body");
  }
}

export default new LoginPage();
