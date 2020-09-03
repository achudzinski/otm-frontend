import * as React from "react";

export interface InfoAlertProps {
    children: React.ReactNode,
}

export const InfoAlert = ({children}: InfoAlertProps) => (
    <div className={"alert alert-info"}>
        {children}
    </div>
);