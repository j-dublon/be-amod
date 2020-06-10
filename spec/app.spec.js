const app = require("../app");
const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;

describe("app", () => {
  describe("/api/:topic", () => {
    describe("GET", () => {
      it("status: 200 returned quotes should have correct keys", () => {
        return request(app).get("/api/being").expect(200);
      });
    });
  });
});
