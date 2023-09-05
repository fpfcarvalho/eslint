import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ComponentClassSuffixComponent } from './rules/component-class-suffix/component-class-suffix.component';
import { ComponentSelectorComponent } from './rules/component-selector/component-selector.component';
import { DirectiveClassSuffixComponent } from './rules/directive-class-suffix/directive-class-suffix.component';
import { DirectiveSelectorComponent } from './rules/directive-selector/directive-selector.component';
import { UseLifecycleInterfaceComponent } from './rules/use-lifecycle-interface/use-lifecycle-interface.component';
import { UsePipeTransformInterfaceComponent } from './rules/use-pipe-transform-interface/use-pipe-transform-interface.component';
import { NoConflictingLifecycleComponent } from './rules/no-conflicting-lifecycle/no-conflicting-lifecycle.component';
import { NoEmptyLifecycleMethodComponent } from './rules/no-empty-lifecycle-method/no-empty-lifecycle-method.component';
import { BanTypesComponent } from './rules/ban-types/ban-types.component';
import { ExplicitFunctionReturnTypeComponent } from './rules/explicit-function-return-type/explicit-function-return-type.component';
import { MaxLenComponent } from './rules/max-len/max-len.component';
import { NoAlertComponent } from './rules/no-alert/no-alert.component';
import { NoBitwiseComponent } from './rules/no-bitwise/no-bitwise.component';
import { NoConsoleComponent } from './rules/no-console/no-console.component';
import { NoDebuggerComponent } from './rules/no-debugger/no-debugger.component';
import { NoMultipleEmptyLinesComponent } from './rules/no-multiple-empty-lines/no-multiple-empty-lines.component';
import { NoMultiSpacesComponent } from './rules/no-multi-spaces/no-multi-spaces.component';
import { CurlyComponent } from './rules/curly/curly.component';
import { ObjectCurlySpacingComponent } from './rules/object-curly-spacing/object-curly-spacing.component';
import { NoRestrictedImportsComponent } from './rules/no-restricted-imports/no-restricted-imports.component';
import { NoEmptyComponent } from './rules/no-empty/no-empty.component';
import { NoEvalComponent } from './rules/no-eval/no-eval.component';
import { NoThrowLiteralComponent } from './rules/no-throw-literal/no-throw-literal.component';
import { NoTrailingSpacesComponent } from './rules/no-trailing-spaces/no-trailing-spaces.component';
import { NoUnusedExpressionsComponent } from './rules/no-unused-expressions/no-unused-expressions.component';
import { PreferConstComponent } from './rules/prefer-const/prefer-const.component';
import { RadixComponent } from './rules/radix/radix.component';
import { NoExtraSemiComponent } from './rules/no-extra-semi/no-extra-semi.component';
import { SemiComponent } from './rules/semi/semi.component';
import { EqeqeqComponent } from './rules/eqeqeq/eqeqeq.component';
import { NoWhitespaceBeforePropertyComponent } from './rules/no-whitespace-before-property/no-whitespace-before-property.component';
import { NoIrregularWhitespaceComponent } from './rules/no-irregular-whitespace/no-irregular-whitespace.component';
import { NoDupeKeysComponent } from './rules/no-dupe-keys/no-dupe-keys.component';
import { NoDupeArgsComponent } from './rules/no-dupe-args/no-dupe-args.component';
import { DefaultCaseComponent } from './rules/default-case/default-case.component';
import { ArrayCallbackReturnComponent } from './rules/array-callback-return/array-callback-return.component';
import { NoCompareNegZeroComponent } from './rules/no-compare-neg-zero/no-compare-neg-zero.component';
import { GetterReturnComponent } from './rules/getter-return/getter-return.component';
import { CommaDangleComponent } from './rules/comma-dangle/comma-dangle.component';
import { ArrayBracketSpacingComponent } from './rules/array-bracket-spacing/array-bracket-spacing.component';
import { CamelcaseComponent } from './rules/camelcase/camelcase.component';
import { IndentComponent } from './rules/indent/indent.component';
import { NoLonelyIfComponent } from './rules/no-lonely-if/no-lonely-if.component';
import { QuotesComponent } from './rules/quotes/quotes.component';
import { RequireJsdocComponent } from './rules/require-jsdoc/require-jsdoc.component';
import { NoEmptyFunctionComponent } from './rules/no-empty-function/no-empty-function.component';
import { NoUnreachableComponent } from './rules/no-unreachable/no-unreachable.component';
import { MaxLinesPerFunctionComponent } from './rules/max-lines-per-function/max-lines-per-function.component';
import { MaxLinesComponent } from './rules/max-lines/max-lines.component';
import { MaxStatementsComponent } from './rules/max-statements/max-statements.component';
import { NoDupeClassMembersComponent } from './rules/no-dupe-class-members/no-dupe-class-members.component';
import { NoDuplicateImportsComponent } from './rules/no-duplicate-imports/no-duplicate-imports.component';
import { NoDuplicateCaseComponent } from './rules/no-duplicate-case/no-duplicate-case.component';
import { NoDupeElseIfComponent } from './rules/no-dupe-else-if/no-dupe-else-if.component';
import { NoConstAssignComponent } from './rules/no-const-assign/no-const-assign.component';
import { NoSelfAssignComponent } from './rules/no-self-assign/no-self-assign.component';
import { NoSelfCompareComponent } from './rules/no-self-compare/no-self-compare.component';
import { NoSetterReturnComponent } from './rules/no-setter-return/no-setter-return.component';
import { NoSparseArraysComponent } from './rules/no-sparse-arrays/no-sparse-arrays.component';
import { NoTemplateCurlyInStringComponent } from './rules/no-template-curly-in-string/no-template-curly-in-string.component';
import { NoUnreachableLoopComponent } from './rules/no-unreachable-loop/no-unreachable-loop.component';
import { NoUnsafeOptionalChainingComponent } from './rules/no-unsafe-optional-chaining/no-unsafe-optional-chaining.component';
import { NoUseBeforeDefineComponent } from './rules/no-use-before-define/no-use-before-define.component';
import { NoUnusedVarsComponent } from './rules/no-unused-vars/no-unused-vars.component';
import { UseIsnanComponent } from './rules/use-isnan/use-isnan.component';
import { ValidTypeofComponent } from './rules/valid-typeof/valid-typeof.component';
import { DefaultCaseLastComponent } from './rules/default-case-last/default-case-last.component';
import { DotNotationComponent } from './rules/dot-notation/dot-notation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ComponentClassSuffixComponent,
    ComponentSelectorComponent,
    DirectiveClassSuffixComponent,
    DirectiveSelectorComponent,
    UseLifecycleInterfaceComponent,
    UsePipeTransformInterfaceComponent,
    NoConflictingLifecycleComponent,
    NoEmptyLifecycleMethodComponent,
    BanTypesComponent,
    ExplicitFunctionReturnTypeComponent,
    MaxLenComponent,
    NoAlertComponent,
    NoBitwiseComponent,
    NoConsoleComponent,
    NoDebuggerComponent,
    NoMultipleEmptyLinesComponent,
    NoMultiSpacesComponent,
    CurlyComponent,
    ObjectCurlySpacingComponent,
    NoRestrictedImportsComponent,
    NoEmptyComponent,
    NoEvalComponent,
    NoThrowLiteralComponent,
    NoTrailingSpacesComponent,
    NoUnusedExpressionsComponent,
    PreferConstComponent,
    RadixComponent,
    NoExtraSemiComponent,
    SemiComponent,
    EqeqeqComponent,
    NoWhitespaceBeforePropertyComponent,
    NoIrregularWhitespaceComponent,
    NoDupeKeysComponent,
    NoDupeArgsComponent,
    DefaultCaseComponent,
    ArrayCallbackReturnComponent,
    NoCompareNegZeroComponent,
    GetterReturnComponent,
    CommaDangleComponent,
    ArrayBracketSpacingComponent,
    CamelcaseComponent,
    IndentComponent,
    NoLonelyIfComponent,
    QuotesComponent,
    RequireJsdocComponent,
    NoEmptyFunctionComponent,
    NoUnreachableComponent,
    MaxLinesPerFunctionComponent,
    MaxLinesComponent,
    MaxStatementsComponent,
    NoDupeClassMembersComponent,
    NoDuplicateImportsComponent,
    NoDuplicateCaseComponent,
    NoDupeElseIfComponent,
    NoConstAssignComponent,
    NoSelfAssignComponent,
    NoSelfCompareComponent,
    NoSetterReturnComponent,
    NoSparseArraysComponent,
    NoTemplateCurlyInStringComponent,
    NoUnreachableLoopComponent,
    NoUnsafeOptionalChainingComponent,
    NoUseBeforeDefineComponent,
    NoUnusedVarsComponent,
    UseIsnanComponent,
    ValidTypeofComponent,
    DefaultCaseLastComponent,
    DotNotationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
