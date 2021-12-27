import { StandardSelector } from ".";
import { ID } from "../common";
import { Post, Store } from "../redux";

export type GetPosts = StandardSelector<Post[]>;

export type GetPostById = (state: Store, id: ID) => Post | null;