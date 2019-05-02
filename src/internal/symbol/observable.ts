/** Symbol.observable addition */
/* Note: This will add Symbol.observable globally for all TypeScript users,
  however, we are no longer polyfilling Symbol.observable */
declare global {
  interface SymbolConstructor {
    readonly observable: symbol;
  }
}

/** Symbol.observable or a string "@@observable". Used for interop */
// tslint:disable-next-line:no-toplevel-property-access
export const observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
