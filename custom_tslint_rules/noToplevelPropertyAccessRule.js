'use strict';
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) {if (b.hasOwnProperty(p)) {d[p] = b[p];}} };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
Object.defineProperty(exports, '__esModule', { value: true });
var rules_1 = require('tslint/lib/rules');
var ts = require('typescript');
var Rule = /** @class */ (function (_super) {
  __extends(Rule, _super);
  function Rule() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Rule.prototype.apply = function (sourceFile) {
    return this.applyWithFunction(sourceFile, walk);
  };
  Rule.FAILURE_STRING = 'Avoid toplevel property access.';
  Rule.metadata = {
    ruleName: 'no-toplevel-property-access',
    description: 'Bans the use of toplevel property access.',
    rationale: 'Toplevel property access prevents effecting tree shaking.',
    options: null,
    optionsDescription: 'Not configurable.',
    type: 'functionality',
    typescriptOnly: false,
  };
  return Rule;
})(rules_1.AbstractRule);
exports.Rule = Rule;
function walk(ctx) {
  return ts.forEachChild(ctx.sourceFile, function cb(node) {
    // Stop recursing into this branch if it's a definition construct.
    // These are function expression, function declaration, class, or arrow function (lambda).
    // The body of these constructs will not execute when loading the module, so we don't
    // need to mark function calls inside them as pure.
    if (ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node) ||
            ts.isClassDeclaration(node) || ts.isClassExpression(node) || ts.isArrowFunction(node) ||
            ts.isMethodDeclaration(node) || ts.isInterfaceDeclaration(node)) {
      return;
    }
    // Fail any property access found.
    if (ts.isPropertyAccessExpression(node) || ts.isElementAccessExpression(node)) {
      ctx.addFailureAtNode(node, Rule.FAILURE_STRING);
    }
    return ts.forEachChild(node, cb);
  });
}
var CORE_TOKENS = (function () { return ({
  'ApplicationRef': 'ApplicationRef',
  'NgZone': 'NgZone',
}); })();
var CORE_TOKENS2 = {
  'ApplicationRef': 'ApplicationRef',
  'NgZone': 'NgZone',
};
//# sourceMappingURL=noToplevelPropertyAccessRule.js.map