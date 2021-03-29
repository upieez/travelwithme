import { renderCard } from "../../src/client/js/renderCard";

describe("renderCard function", () => {
  test("should have a defined function", () => {
    expect(renderCard).toBeDefined();
  });
  test("should return a string", () => {
    const picture = { hits: [{ webformatURL: "fake" }] };
    const weather = { data: [{ weather: { icon: "icon" } }] };
    const countryName = "US";
    const result = renderCard(countryName, weather, picture);
    expect(typeof result).toBe("string");
  });
});
