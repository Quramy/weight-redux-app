/* @flow */

export function currentDateString() {
  return new Date().toISOString().replace(/T.*$/, '');
}
