# eslint-plugin-no-param-reassign-allow-reduce

The rule `no-param-reassign` is a worthwhile rule to enable but array.reduce requires you to break this rule.  Use
this rule instead which allows you to enable the rule but does not throw errors when you do this within the contex of
the array.reduce function.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-param-reassign-allow-reduce`:

```
$ npm install eslint-plugin-no-param-reassign-allow-reduce --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-param-reassign-allow-reduce` globally.

## Usage

Add `no-param-reassign-allow-reduce` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-param-reassign-allow-reduce"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-param-reassign-allow-reduce/allow-reduce": 2,
        "no-param-reassign-allow-reduce/no-reduce-identifiers": 2
    }
}
```
