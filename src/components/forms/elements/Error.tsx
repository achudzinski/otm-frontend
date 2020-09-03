import * as React from "react";
import "./Error.scss";

export interface ErrorProps {
    children: string
}

export const Error = ({children}:ErrorProps) => (
    <div className={"error"}>
        {children}
    </div>
);