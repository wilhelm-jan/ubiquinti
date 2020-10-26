class Dashboard {
  get clientSt() {
    return $("a[data-autotest='endpoints']");
  }
}

export default new Dashboard();
