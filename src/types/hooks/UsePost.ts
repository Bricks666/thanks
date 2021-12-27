import { ID } from "../common";
import { Post } from "../redux";

export type UsePost = (id: ID) => Post | null