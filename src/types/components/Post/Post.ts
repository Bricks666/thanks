import { OnlyClassComponent } from "..";
import { Post } from "../../redux";

export interface PostComponent extends OnlyClassComponent, Post {
	author: string;
}
