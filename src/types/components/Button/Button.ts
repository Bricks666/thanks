import { MouseEventHandler } from "react";
import { OnlyClassComponent } from "..";

type ButtonType = "submit" | "reset"

export interface ButtonComponent extends OnlyClassComponent {
    type: ButtonType;
    onClick?: MouseEventHandler<HTMLButtonElement>
    title: string;
}