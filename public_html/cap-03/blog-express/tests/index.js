

var boot = require("../bin/www").boot,
        shutdown = require("../bin/www").shutdown,
        port = require("../bin/www").port,
        superagent = require("superagent"),
        expect = require("expect.js");

describe('server', function () {
    before(function () {
        boot();
    });

    describe('index', function () {
        it('should respond to GET', function (done) {

            var url = "http://localhost:" + port + "/";
            superagent
                    .get(url)
                    .end(function (res) {
                        expect(res.status).to.equal(200);
                        done();
                    });
        });
    });

    describe('user', function () {
        it('should respond to GET', function (done) {

            var url = "http://localhost:" + port + "/usersss";

            superagent
                    .get(url)
                    .end(function (res) {
                        expect(res.status).to.equal(200);
                        done();
                    });
        });
    });

    after(function () {
        shutdown();
    });

});

