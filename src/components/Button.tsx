import { MouseEventHandler } from "react";
import { Tooltip } from "react-tooltip";

export interface ButtonProperties {
    value: JSX.Element,
    tooltip?: string;
    tooltipId?: string,
    className?: string;
    onClick?: MouseEventHandler
};

export default function Button({ value, tooltip, tooltipId, className, onClick }: ButtonProperties) {
    // Design:
    return (
        <>
            <div className={`${className} cursor-pointer rounded-full hover:bg-gray-100 aspect-square flex flex-col justify-center`} data-tooltip-id={tooltipId} data-tooltip-content={tooltip} onClick={onClick}>
                { value }
            </div>
            {
                (tooltipId && tooltip)
                &&
                <Tooltip id={tooltipId} />
            }
        </>
    );
}