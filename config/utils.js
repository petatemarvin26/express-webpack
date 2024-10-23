const dotenv = require('dotenv');
const {ROOT_DIR} = require('./constants');

const resolve = (path) => ROOT_DIR + '/' + path;

const getenv = () => {
  const env = process.env.ENV;
  const envfile = resolve(`.env${env ? `.${env}` : ''}`);
  try {
    const vars = dotenv.config({path: envfile});
    return {...vars.parsed, ...process.env};
  } catch (err) {
    return {};
  }
};

module.exports = {
  resolve,
  getenv
};
