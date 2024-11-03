"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } // Nicolaas Johan Jansen van Rensburg - u22590732
var app = (0, _express["default"])();
var port = 3000;
app.use(_express["default"]["static"]("frontend/public"));
app.use(_express["default"].json());

// const password = "Nahoj@rdkanqmd1";
// const username = "u22590732@tuks.co.za";
// const parsedUser = encodeURIComponent(username);
// const parsedPass = encodeURIComponent(password);
var url = "mongodb+srv://u22590732:Gerehe4wkh3@projectcluster.jxvvd.mongodb.net/?retryWrites=true&w=majority&appName=ProjectCluster";
var _require = require('mongodb'),
  MongoClient = _require.MongoClient;

// Get User by Id
app.get('/getUserById', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var userId, user;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          userId = parseInt(req.query.id); // Parse `id` from query parameter
          _context.prev = 1;
          _context.next = 4;
          return getUserById(userId);
        case 4:
          user = _context.sent;
          if (user) {
            res.json(user);
          } else {
            res.status(404).json({
              message: "User not found"
            });
          }
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.status(500).json({
            error: "Internal Server Error"
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// Get User by Username and Password
app.get('/getUserByLogins', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$query, username, password, user;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$query = req.query, username = _req$query.username, password = _req$query.password; // Extract username and password from query parameters
          if (!(!username || !password)) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            error: "Username and password are required"
          }));
        case 3:
          _context2.prev = 3;
          _context2.next = 6;
          return getUserByLogins(username, password);
        case 6:
          user = _context2.sent;
          // console.log("Inside try 2");

          if (user) {
            res.json(user); // Return the user object if found
          } else {
            res.status(404).json({
              message: "User not found"
            }); // Respond with a 404 if not found
          }
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](3);
          res.status(500).json({
            error: "Internal Server Error"
          }); // Respond with a 500 in case of an error
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 10]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// Get All Users
app.get('/getUsers', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var users;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return getUsers();
        case 3:
          users = _context3.sent;
          res.json(users); // Return the array of users as JSON
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            error: "Internal Server Error"
          });
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
function getUserByLogins(_x7, _x8) {
  return _getUserByLogins.apply(this, arguments);
}
function _getUserByLogins() {
  _getUserByLogins = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(username, password) {
    var client, database, collection, allUsers, user;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          client = new MongoClient(url);
          _context4.prev = 1;
          console.log("Start of function");
          _context4.next = 5;
          return client.connect();
        case 5:
          _context4.next = 7;
          return client.db("SonicGlow").command({
            ping: 1
          });
        case 7:
          database = client.db('SonicGlow');
          collection = database.collection('users');
          _context4.next = 11;
          return collection.find({}).toArray();
        case 11:
          allUsers = _context4.sent;
          // console.log("All users retrieved:", allUsers);
          // Filter the array to find the user with matching username and password
          user = allUsers[0].users.filter(function (user) {
            return user.username === username && user.password === password;
          }); // console.log(user);
          if (!user) {
            _context4.next = 17;
            break;
          }
          return _context4.abrupt("return", user);
        case 17:
          console.log("User not found");
          return _context4.abrupt("return", null);
        case 19:
          _context4.next = 25;
          break;
        case 21:
          _context4.prev = 21;
          _context4.t0 = _context4["catch"](1);
          console.error("Error retrieving user:", _context4.t0);
          throw _context4.t0;
        case 25:
          _context4.prev = 25;
          _context4.next = 28;
          return client.close();
        case 28:
          return _context4.finish(25);
        case 29:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 21, 25, 29]]);
  }));
  return _getUserByLogins.apply(this, arguments);
}
function getUserById(_x9) {
  return _getUserById.apply(this, arguments);
}
function _getUserById() {
  _getUserById = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
    var _client, database, collection, cursor, userDocuments, _iterator, _step, doc, user;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _client = new MongoClient(url);
          _context5.next = 4;
          return _client.connect();
        case 4:
          _context5.next = 6;
          return _client.db("SonicGlow").command({
            ping: 1
          });
        case 6:
          database = _client.db('SonicGlow');
          collection = database.collection('users');
          cursor = collection.find({
            "_id": id
          });
          _context5.next = 11;
          return cursor.toArray();
        case 11:
          userDocuments = _context5.sent;
          // Extract the user from the array of userDocuments
          _iterator = _createForOfIteratorHelper(userDocuments);
          _context5.prev = 13;
          _iterator.s();
        case 15:
          if ((_step = _iterator.n()).done) {
            _context5.next = 22;
            break;
          }
          doc = _step.value;
          user = doc.users.find(function (u) {
            return u._id === id;
          });
          if (!user) {
            _context5.next = 20;
            break;
          }
          return _context5.abrupt("return", user);
        case 20:
          _context5.next = 15;
          break;
        case 22:
          _context5.next = 27;
          break;
        case 24:
          _context5.prev = 24;
          _context5.t0 = _context5["catch"](13);
          _iterator.e(_context5.t0);
        case 27:
          _context5.prev = 27;
          _iterator.f();
          return _context5.finish(27);
        case 30:
          return _context5.abrupt("return", null);
        case 33:
          _context5.prev = 33;
          _context5.t1 = _context5["catch"](0);
          console.error("Error retrieving user by ID:", _context5.t1);
          throw _context5.t1;
        case 37:
          _context5.prev = 37;
          _context5.next = 40;
          return client.close();
        case 40:
          return _context5.finish(37);
        case 41:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 33, 37, 41], [13, 24, 27, 30]]);
  }));
  return _getUserById.apply(this, arguments);
}
function getUsers() {
  return _getUsers.apply(this, arguments);
}
function _getUsers() {
  _getUsers = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var _client2, database, collection, cursor, userDocuments, allUsers;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _client2 = new MongoClient(url);
          _context6.next = 4;
          return _client2.connect();
        case 4:
          _context6.next = 6;
          return _client2.db("SonicGlow").command({
            ping: 1
          });
        case 6:
          database = _client2.db('SonicGlow');
          collection = database.collection('users');
          cursor = collection.find({});
          _context6.next = 11;
          return cursor.toArray();
        case 11:
          userDocuments = _context6.sent;
          // Extract and combine all users from each document
          allUsers = userDocuments.flatMap(function (doc) {
            return doc.users;
          });
          return _context6.abrupt("return", allUsers);
        case 16:
          _context6.prev = 16;
          _context6.t0 = _context6["catch"](0);
          console.error("Error retrieving all users:", _context6.t0);
          throw _context6.t0;
        case 20:
          _context6.prev = 20;
          _context6.next = 23;
          return client.close();
        case 23:
          return _context6.finish(20);
        case 24:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 16, 20, 24]]);
  }));
  return _getUsers.apply(this, arguments);
}
app.listen(port, function () {
  console.log("Listening on port 3000");
});

// import path from "path";

// const {MongoClient} = require('mongodb');
// const url = "mongodb://db:27017";

// app.post('/getUsers', async function (req, res) {
//     // console.log('get users called');
//     const results = await getAllUsers(req);
//     res.json(results);
// });

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../../frontend', 'public', 'index.html'));
// });

// async function getAllUsers() {
//     const client = new MongoClient(url);

//     try {
//         await client.connect();
//         const db = client.db("assignment6");
//         const users = db.collection("posts");

//         const results = await users.find().toArray();

//         // console.log(results);
//         return results;
//     }
//     catch (e) {
//         console.error(e);
//     }
//     finally {
//         await client.close();
//     }
// }

// app.delete('/deleteUser', async function (req, res) {
//     const results = await deleteUser(req.body);
//     res.json(results);
// });

// async function deleteUser(body) {
//     const client = new MongoClient(url);

//     try {
//         await client.connect(); // Establish connection to the MongoDB cluster
//         const db = client.db("assignment6");
//         const users = db.collection("posts");

//         // Perform the deletion using the ID
//         const result = await users.deleteOne({id: body.id});
//         return result;
//     }
//     catch (e) {
//         console.error(e); // Handle any errors that occur during the deletion
//         // return false;
//     }
//     finally {
//         await client.close(); // Ensure the connection is closed
//     }
// }

// app.patch('/updateUser', async function (req, res) {
//     const results = await updateUser(req.body);
//     res.json(results);
// });

// async function updateUser(reqBody) {
//     const client = new MongoClient(url);

//     try {
//         await client.connect();
//         const database = client.db('assignment6');
//         const collection = database.collection('posts');

//         console.log(reqBody.id);

//         const result = await collection.updateOne({'id': reqBody.id}, {"$set": {"name": reqBody.name, "content": reqBody.content}});

//         return result;
//     } catch (error) {
//         console.error("Error updating user:", error);
//         // return { success: false, message: "Error updating user." };
//     } finally {
//         await client.close();
//     }
// }