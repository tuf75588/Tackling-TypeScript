function func(value: unknown) {
  // @ts-expect-error: Object is of type 'unknown'
  value.length;

  //type guard
  if (typeof value === 'string') {
    value;

    value.length; // OK
  }
}