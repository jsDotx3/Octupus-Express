# Welcome to octopus-express 👋
[![Version](https://img.shields.io/npm/v/octopus-express.svg)](https://www.npmjs.com/package/octopus-express)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/jsDotx3/Octupus-Express#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/jsDotx3/Octupus-Express/graphs/commit-activity)
[![Twitter: jsdotx3](https://img.shields.io/twitter/follow/jsdotx3.svg?style=social)](https://twitter.com/jsdotx3)

> Extend response for used method according HTTP Status Code.

### 🏠 [Homepage](https://github.com/jsDotx3/Octupus-Express#readme)

## Install

```sh
npm install octopus-express --save
```

## Usage

After install, in your app.js can added this middleware before all routes.

```
const octopus = require('octopus-express');
app.use(octopus());
```

Octupus Express has multiple utils for object **response** of Express, for example, previously you programmer this:
```
res.status(400).json({error: 'Message')}
```
Now, with **Octupus Express**, your code is beatiful and simple.
```
res.badRequest('Message');
```

## Example Methods
- **200:** res.ok('message')
- **400:** res.badRequest('message')
- **401:** res.unauthorized('message')

## List Http Status Availables
| HTTP Status | Method | Function |
|:---------:|:------:|:--------:|
|  100      |  Continue  |  continue  |
|  101      |  Switching  Protocols  |  switchingProtocols  |
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


## Author

👤 **Jose Nuñez A. <jos.nuneza@gmail.com>**

* Website: https://twitter.com/jsDotx3
* Twitter: [@jsdotx3](https://twitter.com/jsdotx3)
* Github: [@jsDotx3](https://github.com/jsDotx3)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/jsDotx3/Octupus-Express/issues).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2019 [Jose Nuñez A. <jos.nuneza@gmail.com>](https://github.com/jsDotx3).

This project is [MIT](https://github.com/jsDotx3/Octupus-Express/blob/master/LICENSE) licensed.
