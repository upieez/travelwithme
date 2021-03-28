import { formHandler } from "../../src/client/js/formHandler";

describe("formHandler function", () => {
  test("should not be a defined function", () => {
    expect(formHandler).toBeUndefined();
  });
});
