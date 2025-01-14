# Unhandled Asynchronous Error in Node.js Express App

This repository demonstrates a common error in Node.js applications involving unhandled errors within asynchronous callbacks.  The example uses Express.js to create a simple web server.

## The Problem

The `bug.js` file contains a simple Express.js server.  However, the asynchronous operation within the GET request handler can throw an error.  This error is not properly handled and will cause the server to crash.

## The Solution

The `bugSolution.js` file demonstrates how to properly handle this error using try...catch blocks within the asynchronous operation's callback.