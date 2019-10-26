# Octupus Express Middleware

   [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b9968baf198a4d1a9568d663fd24c560)](https://www.codacy.com/manual/jsDotx3/Octupus-Express?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jsDotx3/Octupus-Express&amp;utm_campaign=Badge_Grade)

**Develop by Jose Nuñez A. <[jos.nuneza@gmail.com](malito:jos.nuneza@gmail.com)>**

![Octubupus](https://i.imgur.com/noVwE9b.png)

## API

API is very simple , we load only **"HTTP_CODES"** of http (you can read [read](https://nodejs.org/api/http.html#http_http_status_codes) list of **HTTP_STATUS_CODE** ) and allow the programmer to use the method with **"camelCase"** for your convergence

## Description

Octupus Express has multiple utils for object **response** of Express, for example, previously you programmer this:
```
res.status(400).json({error: 'Message'})
```
Now, with **Octupus Express**, your code is beatiful and simple.
```
res.badRequest('Message')
```


## Install

Install module with **npm install octopus-express --save** , after in your app.js can added this middleware before all routes.

```
const octopus = require('octopus-express');
app.use(octopus());
```

## Example Methods
| HTTP Code  | Example  | 
|--|--|
200 | **res.ok('message')** |
400 | **res.badRequest('message')** |
401 | **res.unauthorized('message')** |

## List Http Status Availables
| HTTP Code  | Message |   Function  | 
|--|--|--|
|  100  |  Continue  |  continue  |
|  101  |  Switching  Protocols  |  switchingProtocols  |
|  102  |  Processing  |  processing  |
|  103  |  Early  Hints  |  earlyHints  |
|  200  |  OK  |  ok  |
|  201  |  Created  |  created  |
|  202  |  Accepted  |  accepted  |
|  203  |  Non-Authoritative  Information  |  nonAuthoritativeInformation  |
|  204  |  No  Content  |  noContent  |
|  205  |  Reset  Content  |  resetContent  |
|  206  |  Partial  Content  |  partialContent  |
|  207  |  Multi-Status  |  multiStatus  |
|  208  |  Already  Reported  |  alreadyReported  |
|  226  |  IM  Used  |  imUsed  |
|  300  |  Multiple  Choices  |  multipleChoices  |
|  301  |  Moved  Permanently  |  movedPermanently  |
|  302  |  Found  |  found  |
|  303  |  See  Other  |  seeOther  |
|  304  |  Not  Modified  |  notModified  |
|  305  |  Use  Proxy  |  useProxy  |
|  307  |  Temporary  Redirect  |  temporaryRedirect  |
|  308  |  Permanent  Redirect  |  permanentRedirect  |
|  400  |  Bad  Request  |  badRequest  |
|  401  |  Unauthorized  |  unauthorized  |
|  402  |  Payment  Required  |  paymentRequired  |
|  403  |  Forbidden  |  forbidden  |
|  404  |  Not  Found  |  notFound  |
|  405  |  Method  Not  Allowed  |  methodNotAllowed  |
|  406  |  Not  Acceptable  |  notAcceptable  |
|  407  |  Proxy  Authentication  Required  |  proxyAuthenticationRequired  |
|  408  |  Request  Timeout  |  requestTimeout  |
|  409  |  Conflict  |  conflict  |
|  410  |  Gone  |  gone  |
|  411  |  Length  Required  |  lengthRequired  |
|  412  |  Precondition  Failed  |  preconditionFailed  |
|  413  |  Payload  Too  Large  |  payloadTooLarge  |
|  414  |  URI  Too  Long  |  uriTooLong  |
|  415  |  Unsupported  Media  Type  |  unsupportedMediaType  |
|  416  |  Range  Not  Satisfiable  |  rangeNotSatisfiable  |
|  417  |  Expectation  Failed  |  expectationFailed  |
|  418  |  I'm a Teapot | iMATeapot |
|  421  |  Misdirected  Request  |  misdirectedRequest  |
|  422  |  Unprocessable  Entity  |  unprocessableEntity  |
|  423  |  Locked  |  locked  |
|  424  |  Failed  Dependency  |  failedDependency  |
|  425  |  Unordered  Collection  |  unorderedCollection  |
|  426  |  Upgrade  Required  |  upgradeRequired  |
|  428  |  Precondition  Required  |  preconditionRequired  |
|  429  |  Too  Many  Requests  |  tooManyRequests  |
|  431  |  Request  Header  Fields  Too  Large  |  requestHeaderFieldsTooLarge  |
|  451  |  Unavailable  For  Legal  Reasons  |  unavailableForLegalReasons  |
|  500  |  Internal  Server  Error  |  internalServerError  |
|  501  |  Not  Implemented  |  notImplemented  |
|  502  |  Bad  Gateway  |  badGateway  |
|  503  |  Service  Unavailable  |  serviceUnavailable  |
|  504  |  Gateway  Timeout  |  gatewayTimeout  |
|  505  |  HTTP  Version  Not  Supported  |  httpVersionNotSupported  |
|  506  |  Variant  Also  Negotiates  |  variantAlsoNegotiates  |
|  507  |  Insufficient  Storage  |  insufficientStorage  |
|  508  |  Loop  Detected  |  loopDetected  |
|  509  |  Bandwidth  Limit  Exceeded  |  bandwidthLimitExceeded  |
|  510  |  Not  Extended  |  notExtended  |
|  511  |  Network  Authentication  Required  |  networkAuthenticationRequired  |
