import * as crypto from 'crypto';

export function getCurrentTest(): string {
  return expect.getState().currentTestName || '';
}

export function getCurrentTestHash(): string {
  return crypto.createHash('md5')
    .update(getCurrentTest())
    .digest('hex')
    .substring(0, 16);
}
