/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.21/15.4.4.21-8-b-iii-1-9.js
 * @description Array.prototype.reduce - element to be retrieved is own accessor property on an Array-like object
 */


function testcase() {

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === 0);
            }
        }

        var obj = { 1: 1, 2: 2, length: 3 };
        Object.defineProperty(obj, "0", {
            get: function () {
                return 0;
            },
            configurable: true
        });

        Array.prototype.reduce.call(obj, callbackfn);
        return testResult;
    }
runTestCase(testcase);
