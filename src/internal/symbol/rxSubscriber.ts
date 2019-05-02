/** @deprecated do not use, this is no longer checked by RxJS internals */
export const rxSubscriber =
  typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    // tslint:disable-next-line:no-toplevel-property-access
    : '@@rxSubscriber_' + Math.random();

/**
 * @deprecated use rxSubscriber instead
 */
export const $$rxSubscriber = rxSubscriber;
