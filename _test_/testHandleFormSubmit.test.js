import handleFormSubmit from "../src/client/js/handleFormSubmit";

describe("Testing the submit functionality of the form", () => {
  test("Making sure handleFormSubmit is defined", () => {
    expect(handleFormSubmit).toBeDefined();
  });
});
