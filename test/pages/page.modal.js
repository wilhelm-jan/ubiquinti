class PageModal {
  get firstName() {
    return $("input[name='firstName']");
  }
  get lastName() {
    return $("input[name='lastName']");
  }
  get address() {
    return $("input[name='address']");
  }
  get note() {
    return $("textarea[name='note']");
  }
  get plan() {
    return $("button[data-autotest='newClientAssignChooseServicePlanBtn']");
  }
  get planDropdown() {
    return $("div[data-autotest='servicePlanSelect']");
  }
  get internetBasic() {
    return $("li[data-value='3']");
  }
  get email() {
    return $("button[data-autotest='newClientAssignAddEmailBtn']");
  }
  get emailInpt() {
    return $("[name='email']");
  }
  get phone() {
    return $("[data-autotest='newClientAssignAddPhoneBtn']");
  }
  get phoneInpt() {
    return $("input[name='phone']");
  }
  get submitBtn() {
    return $("button[data-autotest='newClientAssignSubmitBtn']");
  }
  get sitesList() {
    return $("div[data-autotest*='tableRow']:nth-last-of-type(2)");
  }
}

export default new PageModal();
