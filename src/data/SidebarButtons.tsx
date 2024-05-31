import { SidebarButtonProperties } from "../components/SidebarButton";
import homeIcon from '../icons/home.svg';
import calendarIcon from '../icons/calendar.svg';
import salesIcon from '../icons/sales.svg';
import clientsIcon from '../icons/clients.svg';
import catalogueIcon from '../icons/catalogue.svg';
import onlineProfileIcon from '../icons/online-profile.svg';
import marketingIcon from '../icons/marketing.svg';
import paymentsIcon from '../icons/payments.svg';
import teamsIcon from '../icons/teams.svg';
import reportsIcon from '../icons/reports.svg';
import addonsIcon from '../icons/addons.svg';
import businessSettings from '../icons/businessSettings.svg';

const sidebarButtons: SidebarButtonProperties[] = [
    /* Home button */
    {
        content: <img src={homeIcon} alt="Home" className="w-8 h-8"/>,
        href: "/",
        tooltip: "Home",
        tooltipId: "btnHome",
        className: "mx-2 my-3"
    },

    /* Calendars button */
    {
        content: <img src={calendarIcon} alt="Calendars" className="w-8 h-8"/>,
        href: "/",
        tooltip: "Calendars",
        tooltipId: "btnCalendars",
        className: "mx-2 mb-3"
    },

    /* Sales button */
    {
        content: <img src={salesIcon} alt="Sales" className="w-8 h-8"/>,
        href: "/",
        tooltip: "Sales",
        tooltipId: "btnSales",
        className: "mx-2 mb-3"
    },

    /* Clients button */
    {
        content: <img src={clientsIcon} alt="Clients" className="w-8 h-8"/>,
        href: "/",
        tooltip: "Clients",
        tooltipId: "btnClients",
        className: "mx-2 mb-3"
    },

    /* Catalogue button */
    {
        content: <img src={catalogueIcon} alt="Catalogue" className="w-8 h-8"/>,
        href: "/",
        tooltip: "Catalogue",
        tooltipId: "btnCatalogue",
        className: "mx-2 mb-3"
    },

    /* Online profile button */
    {
        content: <img src={onlineProfileIcon} alt="Online profile" className="w-8 h-8"/>,
        href: "/",
        tooltip: "Online profile",
        tooltipId: "btnOnlineProfile",
        className: "mx-2 mb-3"
    },

    /* Marketing button */
    {
        content: <img src={marketingIcon} alt="Marketing" className="w-8 h-8"/>,
        href: "/",
        tooltip: "Marketing",
        tooltipId: "btnMarketing",
        className: "mx-2 mb-3"
    },

    /* Payments button */
    {
        content: <img src={paymentsIcon} alt="Payments" className="w-8 h-8"/>,
        href: "/",
        tooltip: "Payments",
        tooltipId: "btnPayments",
        className: "mx-2 mb-3"
    },

    /* Teams button */
    {
        content: <img src={teamsIcon} alt="Teams" className="w-8 h-8"/>,
        href: "/",
        tooltip: "Teams",
        tooltipId: "btnTeams",
        className: "mx-2 mb-3"
    },

    /* Reports button */
    {
        content: <img src={reportsIcon} alt="Reports" className="w-8 h-8"/>,
        href: "/",
        tooltip: "Reports",
        tooltipId: "btnReports",
        className: "mx-2 mb-3"
    },

    /* Add-ons button */
    {
        content: <img src={addonsIcon} alt="Add-ons" className="w-8 h-8"/>,
        href: "/",
        tooltip: "Add-ons",
        tooltipId: "btnAddons",
        className: "mx-2 mb-3"
    },

    /* Business settings button */
    {
        content: <img src={businessSettings} alt="Business Settings" className="w-8 h-8"/>,
        href: "/",
        tooltip: "Business Settings",
        tooltipId: "btnBusinessSettings",
        className: "mx-2 mb-3"
    }
];

function getSidebarButtons(): SidebarButtonProperties[] {
    return [ ...sidebarButtons ];
}

export default getSidebarButtons;