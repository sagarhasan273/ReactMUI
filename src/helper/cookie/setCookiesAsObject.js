import setCookie from './setCookie';

const setCookiesAsObject = (key, value, exday=5) => {
  setCookie(key, value, exday);
};

export default setCookiesAsObject;
