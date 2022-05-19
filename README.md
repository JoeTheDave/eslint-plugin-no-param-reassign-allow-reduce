# eslint-plugin-no-param-reassign-allow-reduce

The rule `no-param-reassign` is a worthwhile rule to enable but array.reduce() requires you to break this rule. Use this rule instead which allows you to enable the rule but does not throw errors when you do this within the contex of the array.reduce function.

[npm Package](https://www.npmjs.com/package/eslint-plugin-no-param-reassign-allow-reduce)

## Installation

```
$ npm i eslint-plugin-no-param-reassign-allow-reduce
```

## Usage

Add `no-param-reassign-allow-reduce` to the plugins section of your `.eslintrc` configuration file and add the rules to the rule section.

```json
{
  "plugins": ["no-param-reassign-allow-reduce"]
}

...

{
  "rules": {
    "no-param-reassign-allow-reduce/allow-reduce": 2,
    "no-param-reassign-allow-reduce/no-reduce-identifiers": 2
  }
}
```
