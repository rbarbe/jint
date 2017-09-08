// Copyright 2011 the Sputnik authors.  All rights reserved.
/**
 * @path ch15/15.2/15.2.4/15.2.4.7/S15.2.4.7_A13.js
 * @description Let O be the result of calling ToObject passing the this value as the argument.
 * @negative
 */

Object.prototype.propertyIsEnumerable.call(null, 'foo');

