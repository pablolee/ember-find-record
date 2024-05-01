import Pretender from 'pretender';

export function returnJSON(status, body) {
  return json(...arguments);
}

export function json(status, body) {
  if (arguments.length === 1) {
    body = status;
    status = 200;
  }

  return [status, { 'Content-Type': 'application/json' }, JSON.stringify(body)];
}

export const server = new Pretender();

export function initialize() {
  server.handledRequest = function (verb, path, request) {
    console.log(`handled request to ${verb} ${path}`);
  };

  server.unhandledRequest = function (verb, path, request) {
    console.log(`unhandled request ${verb} ${path}`);
  };
}

export default {
  name: 'pretender',
  initialize,
};
