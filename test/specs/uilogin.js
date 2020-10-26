import LoginPage from "../pages/login.page";
import data from "./client.json";
import Dashboard from "../pages/dashboard.page";
import Sites from "../pages/sites.page";
import PageModal from "../pages/page.modal";
import generateName from "./utils";

let random = Math.floor(Math.random() * data.length);

describe("Login page", () => {
  before(async () => {
    await browser.maximizeWindow();
  });

  it("should open login page and log in", async () => {
    await LoginPage.open();
    await LoginPage.userInpt.then((e) => e.setValue(process.argv[3]));
    await LoginPage.passInpt.then((e) => e.setValue(process.argv[4]));
    await LoginPage.signBtn.then((e) => e.click());
  });
});
describe("Dashboard page", () => {
  it("should pass to client sites", async () => {
    await console.log("Logged in successfully");
    await Dashboard.clientSt.then((e) => e.click());
  });
});

describe("Client sites page", () => {
  it("should click new client site button", async () => {
    await Sites.newClient.then((e) => e.click());
  });
});

describe("New client site modal", () => {
  it("should fill in client site modal and verify its creation", async () => {
    /* const result = browser.execute(() => {
      let names = document.getElementsByName("identification.name");
      let namesArr = [];
      let myArr = Array.from(names);
      myArr.forEach((name) => namesArr.push(name.textContent));
      return namesArr;
    }); */

    let fn = await generateName();
    let ln = await generateName();
    await PageModal.firstName.then((e) => e.setValue(fn));
    await PageModal.lastName.then((e) => e.setValue(ln));
    await PageModal.address.then((e) =>
      e.addValue(
        data[random].address.street +
          " " +
          data[random].address.city +
          " " +
          data[random].address.zipcode
      )
    );
    await PageModal.note.then((e) => e.setValue(data[random].note));
    await PageModal.plan.then((e) => e.click());
    await browser.pause(500);
    await PageModal.planDropdown.then((e) => e.click());
    await browser.pause(500);
    await PageModal.internetBasic.then((e) => e.click());
    await browser.pause(500);
    await PageModal.email.then((e) => e.click());
    await browser.pause(500);
    await PageModal.emailInpt.then((e) => e.setValue(data[random].email));
    await browser.pause(500);
    await PageModal.phone.then((e) => e.click());
    await PageModal.phoneInpt.then((e) => e.setValue(data[random].phone));
    await PageModal.submitBtn.then((e) => e.click());
    await browser.pause(10000);
    const test = await PageModal.sitesList;
    await expect(test).toHaveTextContaining(fn);
    await expect(test).toHaveTextContaining(ln);
    await console.log(`site created by ${fn} ${ln}`);
  });
});
