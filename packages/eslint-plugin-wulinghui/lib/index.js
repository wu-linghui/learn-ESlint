/**
 * @fileoverview wulinghui&#39;s plugin
 * @author wulinghui
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

console.log(requireIndex(__dirname + "/rules"))
// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs={
  wulinghuiConfig:{
    rules:{
      "wulinghui/find-todo":["error","todo","fixme"],
      "wulinghui/find-deprecated": ["error"]
    }
  }
}


