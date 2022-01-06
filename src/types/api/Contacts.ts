import { SimpleFunction } from "../common";
import { Contact } from "../redux";

export type GetContacts = SimpleFunction<Promise<Contact[]>>;
