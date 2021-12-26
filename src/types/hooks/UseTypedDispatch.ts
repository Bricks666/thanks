import { ThunkDispatch } from "redux-thunk";
import { RootActions, Store } from "../redux";

type TypedDispatch = ThunkDispatch<Store, undefined, RootActions>;
export type UseTypedDispatch = () => TypedDispatch;
