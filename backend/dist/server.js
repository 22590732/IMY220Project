"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Nicolaas Johan Jansen van Rensburg - u22590732

var app = (0, _express["default"])();
app.use(_express["default"]["static"]("frontend/public"));
app.listen(3000, function () {
  console.log("Listening on port 3000");
});