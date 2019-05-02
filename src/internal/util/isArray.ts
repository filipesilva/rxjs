// tslint:disable-next-line:no-toplevel-property-access
export const isArray = Array.isArray || (<T>(x: any): x is T[] => x && typeof x.length === 'number');
