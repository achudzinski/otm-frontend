import * as React from "react";
import {useEffect, useState} from "react";
import "./Spinner.scss";

export interface SpinnerProps {
    animationInterval?: number,
}

/**
 * The "Loading..." text with animated dots
 */
export const Spinner = ({animationInterval = 700}: SpinnerProps) => {
    const [dots, setDots] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(dots => (dots + 1) % 4);
        }, animationInterval)

        return () => {
            clearInterval(interval);
        }
    }, [animationInterval]);

    return (
        <div className={"spinner"}>
            Loading{".".repeat(dots)}
        </div>
    );
};
