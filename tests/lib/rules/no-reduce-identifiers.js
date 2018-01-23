"use strict";

const rule = require("../../../lib/rules/no-reduce-identifiers");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("no-reduce-identifiers", rule, {
    valid: [
        "({}).foo = function() {}",
        "({}).foo = foo",
        "var foo = { bar: baz }",
    ],
    invalid: [
      { code: "({}).reduce = function() {}", errors: [{ message: "No object properties named reduce" }] },
      { code: "({}).reduce = foo", errors: [{ message: "No object properties named reduce" }] },
      { code: "var foo = { reduce: bar }", errors: [{ message: "No object properties named reduce" }] },
    ],
});