const {camalize} = require('./string');
const {STATUS_CODES} = require('http');

module.exports = () => {
  return (req, res, next) => {
    const handle = (statusCode) => {
      return (data, meta) => {
        if (statusCode.charAt(0).match('[4-5]') !== null) {
          return res.status(statusCode).json({
            error: data,
          });
        }
        return res.status(statusCode).json({
          data,
          meta,
        });
      };
    };

    Object.keys(STATUS_CODES).map((key) => {
      const method = camalize(STATUS_CODES[key]);
      res[method] = handle(key);
    });

    next();
  };
};
