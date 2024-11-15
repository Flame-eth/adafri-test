import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";

/* `const app = express();` is creating an instance of the Express application. Express is a web
application framework for Node.js that provides a set of features for building web applications and
APIs. By creating an instance of the Express application, you can then use this `app` object to
define routes, middleware, and other functionalities for your web application. */
const app = express();

/* `app.use(bodyParser.json());` is setting up middleware in the Express application to parse incoming
requests with JSON payloads. This middleware function provided by the `body-parser` package parses
the incoming request body and makes it available under the `req.body` property in your route
handlers. This allows you to easily work with JSON data sent in the request body of incoming HTTP
requests. */
app.use(bodyParser.json());

/* `app.use(cors());` is setting up CORS (Cross-Origin Resource Sharing) middleware in the Express
application. CORS is a security feature implemented by web browsers to restrict web pages from
making requests to a different domain than the one that served the original web page. */
app.use(cors());

/* `app.use(helmet());` is setting up Helmet middleware in the Express application. Helmet is a
collection of middleware functions that help secure Express apps by setting various HTTP headers to
prevent common web vulnerabilities. These headers can help protect your app from attacks like
cross-site scripting (XSS), clickjacking, and other security threats. By using `app.use(helmet());`,
you are adding these security headers to your Express application to enhance its security posture. */
app.use(helmet());





export default app;
