// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The "static" token can not be used as identifier in strict code
 *
 * @path ch07/7.6/7.6.1/7.6.1.2/S7.6.1.2_A1.26.js
 * @description Checking if execution of "static=1" fails in strict code
 * @onlyStrict
 * @negative
 */

"use strict";
var static = 1;

