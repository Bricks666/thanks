import { ThunkDispatch } from "redux-thunk";
import { SimpleFunction } from "../common";
import { RootActions, Store } from "../redux";

type TypedDispatch = ThunkDispatch<Store, undefined, RootActions>;
export type UseTypedDispatch = SimpleFunction<TypedDispatch>;
