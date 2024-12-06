import { RESOLVER } from "awilix";

export const define = (name: string, fn: any) => {
  fn[RESOLVER] = {
    name,
  };
  return fn;
};
