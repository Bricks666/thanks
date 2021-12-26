import { StandardSelector } from ".";
import { Post } from "../redux";

export type GetPosts = StandardSelector<Post[]>;
