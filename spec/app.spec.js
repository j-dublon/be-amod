const app = require("../app");
const connection = require("../db/connection");
const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;

describe("app", () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());
  describe("/api", () => {
    describe("GET", () => {
      it("status: 200 responds with a json of all available endpoints on this API", () => {
        return request(app)
          .get("/api")
          .expect(200)
          .expect("Content-Type", /json/);
      });
    });
    describe("/api/:topic", () => {
      describe("GET", () => {
        it("status: 200 returned quotes should have correct keys", () => {
          return request(app).get("/api/longing").expect(200);
        });
      });
    });
  });
});
