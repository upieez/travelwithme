const request = require("supertest");
const app = require("../../src/server/app");

describe("Retrieve Endpoints", () => {
  it("should return 200 if successful for /save-trip", async () => {
    const response = await request(app).post("/save-trip", {
      body: { data: ["testing"] },
    });
    expect(response.statusCode).toBe(200);
  });
  it("should return 404 for everything else", async () => {
    const response = await request(app).get("/foo/bar");
    expect(response.statusCode).toBe(404);
  });
});
