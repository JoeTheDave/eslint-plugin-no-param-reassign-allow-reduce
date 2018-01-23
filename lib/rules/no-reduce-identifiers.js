"use strict";

const _ = require('lodash');

module.exports = {
    create(context) {
        function checkAssignmentExpression(node) {
          if (_.get(node, 'left.property.name', '') === 'reduce') {
            context.report(node, 'No object properties named reduce');
          }
        }

        function checkObjectExpression(node) {
          if (node.properties) {
            _.forEach(node.properties, function(property) {
              if (_.get(property, 'key.name') === 'reduce') {
                context.report(node, 'No object properties named reduce');
              }
            })
          }
          const objectProperties = _.get(node, '', null);
        }

        return {
            "AssignmentExpression": checkAssignmentExpression,
            "ObjectExpression": checkObjectExpression,
        };
    },
};