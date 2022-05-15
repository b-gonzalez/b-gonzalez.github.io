"use strict";
/* global clearInterval, console, CustomFunctions, setInterval */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minus = exports.logMessage = exports.increment = exports.currentTime = exports.clock = exports.add = void 0; // import moment from "moment";

/**
 * Adds two numbers.
 * @customfunction
 * @param first First number
 * @param second Second number
 * @returns The sum of the two numbers.
 */

function add(first, second) {
  return first + second;
}

exports.add = add;
/**
 * Displays the current time once a second.
 * @customfunction
 * @param invocation Custom function handler
 */

function clock(invocation) {
  var timer = setInterval(function () {
    var time = currentTime();
    invocation.setResult(time);
  }, 1000);

  invocation.onCanceled = function () {
    clearInterval(timer);
  };
}

exports.clock = clock;
/**
 * Returns the current time.
 * @returns String with the current time formatted for the current locale.
 */

function currentTime() {
  return new Date().toLocaleTimeString();
}

exports.currentTime = currentTime;
/**
 * Increments a value once a second.
 * @customfunction
 * @param incrementBy Amount to increment
 * @param invocation Custom function handler
 */

function increment(incrementBy, invocation) {
  var result = 0;
  var timer = setInterval(function () {
    result += incrementBy;
    invocation.setResult(result);
  }, 1000);

  invocation.onCanceled = function () {
    clearInterval(timer);
  };
}

exports.increment = increment;
/**
 * Writes a message to console.log().
 * @customfunction LOG
 * @param message String to write.
 * @returns String to write.
 */

function logMessage(message) {
  console.log(message);
  return message;
}

exports.logMessage = logMessage;
/**
 * Writes a message to console.log().
 * @customfunction minus
 * @param val1 first value.
 * @param val2 second value.
 * @returns String to write.
 */

function minus(val1, val2) {
  return val1 - val2;
}

exports.minus = minus; // /**
//  * Writes a message to console.log().
//  * @customfunction momentCaldendar
//  * @param callBack callback function
//  * @param val1 first value.
//  * @param val2 second value.
//  * @returns returns start of day from now
//  */
//  export function momentCaldendar(callback = null, val1 = null, val2 = null): string{
//   const moment = require('moment');
//   let result = null;
//   if (callback === null){
//     result = moment().momentCaldendar
//   } else if (val1 !== null && val2 !== null){
//     result = moment.callBack(val1,val2)
//   }
//   return result;
// }
// /**
//  * Writes a message to console.log().
//  * @customfunction useMoment
//  * @returns returns start of day from now
//  */
// export function useMoment(): number{
//   const moment = require('moment');
//   return moment().startOf('day').fromNow();
// }

CustomFunctions.associate("ADD", add);
CustomFunctions.associate("CLOCK", clock);
CustomFunctions.associate("INCREMENT", increment);
CustomFunctions.associate("LOG", logMessage);
CustomFunctions.associate("MINUS", minus);