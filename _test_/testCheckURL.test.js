import checkURL from "../src/client/js/checkURL";

describe("Testing regex URL checking functionality", () => {
  test("Making sure checkURL is defined", () => {
    expect(checkURL).toBeDefined();
  });

  test("Making sure a valid URL returns true", () => {
    expect(checkURL("www.facebook.com")).toBeTruthy();
  });

  test("Making sure an invalid URL returns false", () => {
    expect(checkURL("Not A link")).toBeFalsy();
  });
});
