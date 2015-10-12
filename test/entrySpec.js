'use strict';

var header = require('./db/header');

function dummy() {
}

describe("Library entry function", function () {

    var pgpLib, moduleName = '../lib/index';
/*
    beforeEach(function () {
        delete require.cache[require.resolve(moduleName)];
        pgpLib = require(moduleName);
    });

    describe("without any promise override", function () {
        it("must return a valid library object", function () {
            var lib = pgpLib();
            expect(typeof(lib)).toBe('function');
        })
    });

    describe("without any options", function () {
        var result;
        beforeEach(function (done) {
            var db = require('./db/header')().db;
            db.query("select * from users")
                .then(function (data) {
                    result = data;
                    done();
                });
        });
        it("must be able to execute queries", function () {
            expect(result instanceof Array).toBe(true);
        })
    });

    describe("with a valid promise library-object override", function () {
        it("must return a valid library object", function () {
            var lib = pgpLib(
                {
                    promiseLib: {
                        resolve: dummy,
                        reject: dummy
                    }
                });
            expect(typeof(lib)).toBe('function');
        })
    });

    describe("with a valid promise library-function override", function () {
        it("must return a valid library object", function () {
            function fakePromiseLib() {
            }

            fakePromiseLib.resolve = dummy;
            fakePromiseLib.reject = dummy;
            var lib = pgpLib({
                promiseLib: fakePromiseLib
            });
            expect(typeof(lib)).toBe('function');
        })
    });

    describe("with invalid promise override", function () {
        it("must throw the correct error", function () {
            expect(function () {
                pgpLib({
                    promiseLib: "test"
                });
            })
                .toThrow(new Error("Invalid promise library specified."));
        });
    });

    describe("with invalid options parameter", function () {
        it("must throw the correct error", function () {
            expect(function () {
                pgpLib(123);
            })
                .toThrow(new Error("Invalid parameter 'options' specified."));
        });
    });
*/

});

if (jasmine.Runner) {
    var _finishCallback = jasmine.Runner.prototype.finishCallback;
    jasmine.Runner.prototype.finishCallback = function () {
        // Run the old finishCallback:
        _finishCallback.bind(this)();

        pgp.end(); // closing pg database application pool;
    };
}
