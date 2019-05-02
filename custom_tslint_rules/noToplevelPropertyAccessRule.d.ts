/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { IRuleMetadata, RuleFailure } from 'tslint/lib';
import { AbstractRule } from 'tslint/lib/rules';
import * as ts from 'typescript';
export declare class Rule extends AbstractRule {
    static FAILURE_STRING: string;
    static metadata: IRuleMetadata;
    apply(sourceFile: ts.SourceFile): RuleFailure[];
}
