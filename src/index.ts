import {QuarterlyQuilApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {QuarterlyQuilApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new QuarterlyQuilApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running in ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
