import request from "supertest";
import app from "../src/app";

describe("GET /", () => {
  it("should respond with Hello World", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello World");
    expect(response.status).toBe(200);
  });
});
