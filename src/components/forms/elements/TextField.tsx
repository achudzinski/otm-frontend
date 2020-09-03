import * as React from "react";
import "./TextField.scss";
import {classNames} from "../../../services/classNames";

export interface TextFieldProps {
    value?: string | number,
    isInvalid?: boolean,
    onChange: (value: string) => void,
    onKeyDown?: (key: string) => void,
}

export const TextField = ({value, isInvalid = false, onChange, onKeyDown}: TextFieldProps) => (
    <div className={classNames(["text-field", isInvalid && "text-field--invalid"])}>
        <input
            type="text"
            className={"text-field--input"}
            value={value}
            onChange={e => onChange(e.target.value)}
            onKeyDown={e => onKeyDown ? onKeyDown(e.key) : null}
        />
    </div>
);