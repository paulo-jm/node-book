

var boot = require("../bin/test").boot,
        shutdown = require("../bin/test").shutdown,
        port = require("../bin/test").port,
        superagent = require("superagent"),
        expect = require("expect.js");

var seedArticles = require('../db/articles');

describe('server', function () {
    before(function () {
        boot();
    });

    describe('index', function () {
        it('should respond to GET', function (done) {

            var url = "http://localhost:" + port;

            superagent
                    .get(url)
                    .end(function (res) {
                        expect(res.status).to.equal(200);
                        done();
                    });

        });

        it("should contain post", function (done) {

            var url = "htpp://localhost:" + port;

            superagent
                    .get(url)
                    .end(function (res) {
                        seedArticles.forEach(function (item, indes, list) {
                            if (item.published) {
                                expect(res.text).to.contain('<h2><a href="/articles/' + item.slug + '">' +
                                        item.title);
                            } else {
                                expect(res.text).not.to.contain('<h2><a href="/articles/' + item.slug + '">' +
                                        item.title);
                            }
                            // console.log(item.title, res.text)
                        });
                        done();
                    });
        });

    });

    describe('article page', function () {

        it('should respond to GET', function (done) {


            var url = "http:/localhost:" + port + '/articles/';

            superagent
                    .get(url)
                    .end(function (res) {
                        expect(res.status).to.equal("200");
                        done();
                    });
        });

        it('should display text', function (done) {
            var n = seedArticles.length;
            seedArticles.forEach(function (item, index, list) {
                superagent
                        .get('http://localhost:' + port + '/articles/' + seedArticles[index].slug)
                        .end(function (res) {
                            if (item.published) {
                                expect(res.text).to.contain(seedArticles[index].text);
                            } else {
                                expect(res.status).to.be(401);
                            }

                            // console.log(item.title)
                            if (index + 1 === n) {
                                done();
                            }
                        });
            })
        });
    });

    describe('user', function () {
        it('should respond to GET', function (done) {

            var url = "http://localhost:" + port + "/users";

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

