import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export const sideBarButtonStyle: string = "";

export interface SidebarButtonProperties {
    content: JSX.Element;
    href: string;
    tooltipId?: string;
    tooltip?: string;
    className?: string;
    selected?: boolean;
}

export default function SidebarButton({ content, href, tooltip, tooltipId, className, selected }: SidebarButtonProperties) {
    // Design:
    return (
        <>
            <Link to={href} className={`block aspect-square rounded-lg cursor-pointer ${ !selected ? "hover:bg-[#404753]" : "bg-[#6950f3]" } p-2 fill-white ${className}`} data-tooltip-id={tooltipId} data-tooltip-content={tooltip}>
                {/* Content */}
                { content }
            </Link>
            <Tooltip id={tooltipId} />
        </>
    );
}