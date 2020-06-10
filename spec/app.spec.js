const app = require("../app");
const connection = require("../db/connection");
const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;

describe("app", () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());
  it("status: 404 for invalid path", () => {
    return request(app)
      .get("/invalid-path")
      .expect(404)
      .then(({ body: { msg } }) => {
        expect(msg).to.equal("path not found");
      });
  });
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
          return request(app)
            .get("/api/longing")
            .expect(200)
            .then(({ body }) => {
              body.forEach((quote) => {
                expect(quote).to.have.all.keys(
                  "quote_id",
                  "topic",
                  "body",
                  "author",
                  "work"
                );
              });
            });
        });
        it("status: 200 should return all quotes with specified topic", () => {
          return request(app)
            .get("/api/being")
            .expect(200)
            .then(({ body }) => {
              expect(body.length).to.equal(6);
            });
        });
      });
    });
  });
});
