"use strict";

var routes = require("next-routes")();
routes.add("/projects/new", "/projects/new").add("/projects/:address", "/projects/show").add("/projects/:address/validate", "/projects/validate").add("/projects/:address/reject", "/projects/reject").add("/projects/:address/donate", "/projects/donate").add("/projects/:address/add", "/projects/add").add("/projects/:address/view", "/projects/view");
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsaUJBQTJCLEFBQTNCLGlCQUNDLEFBREQsSUFDSyxBQURMLHNCQUMyQixBQUQzQixrQkFFQyxBQUZELElBRUssQUFGTCwrQkFFbUMsQUFGbkMsc0JBR0MsQUFIRCxJQUdLLEFBSEwsNkJBR2lDLEFBSGpDLG9CQUlDLEFBSkQsSUFJSyxBQUpMLDZCQUlpQyxBQUpqQyxvQkFLQyxBQUxELElBS0ssQUFMTCwwQkFLOEIsQUFMOUIsaUJBTUMsQUFORCxJQU1LLEFBTkwsMkJBTStCLEFBTi9CO0FBT0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9kaGlyYS9EZXNrdG9wL0FsdENvaW4tRmluYWwifQ==