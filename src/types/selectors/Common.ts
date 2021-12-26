import { Store } from "../redux";

export type StandardSelector<R> = (state: Store) => R;
