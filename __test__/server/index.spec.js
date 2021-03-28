const request = require("supertest");
const app = require("../../src/server/index");

describe("Retrieve Endpoints", () => {
  it("should return 200 if successful for /save-trip", async () => {
    const response = await request(app).post("/save-trip", {
      body: { data: ["testing"] },
    });
    expect(response.statusCode).toBe(200);
  });
});
