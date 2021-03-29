import { handleSubmit } from "../../src/client/js/formHandler";

describe("formHandler function", () => {
  test("should be a defined function", async () => {
    expect(handleSubmit).toBeDefined();
  });
});
