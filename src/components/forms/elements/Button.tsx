import * as React from "react";
import {ReactNode} from "react";
import "./Button.scss";

export interface ButtonProps {
    children: ReactNode,
    onClick: () => void,
}

export const Button = ({children, onClick}: ButtonProps) => (
    <button className={"button"} onClick={onClick}>
        {children}
    </button>
);