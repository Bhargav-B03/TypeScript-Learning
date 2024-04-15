// namespace is a pure ts feature and is not supported in js. 
// To import a namespace, the syntax is a special comment
// /// <reference path="file-name.ts"/> (note that here this three slashes are part of the syntax)

// while using ES6 module import exports, we need to specify .js file not the .ts file in the path.
// for ex: import {module} from "file-name.js";

// Note:- Modules only work with the HTTP(s) protocol. A web-page opened via the file:// protocol cannot use import / export.

// A module imported multiple times in different files, runs only once though it is imported various files.