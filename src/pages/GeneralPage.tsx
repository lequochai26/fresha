import Button from "../components/Button";
import ProfileButton from "../components/ProfileButton";
import User from "../models/User";
import freshaLogo from '../icons/fresha.svg';
import findIcon from '../icons/find.svg';
import newsIcon from '../icons/news.svg';
import notificationsIcon from '../icons/notifications.svg';
import walletsIcon from '../icons/wallets.svg';
import SidebarButton from "../components/SidebarButton";
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
import NotFoundView from "../views/NotFoundView";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function GeneralPage() {
    // Design
    return (
        // Whole page
        <div className="w-screen h-screen flex flex-col">
            {/* Header bar */}
            <div className="px-5 py-3 flex justify-start items-center border-b border-solid border-b-gray-300">
                {/* Fresha logo */}
                <div className="flex-1 h-fit">
                    <a href="/">
                        <img src={freshaLogo} alt="Fresha's logo" className="inline-block w-20" />
                    </a>
                </div>

                {/* Find button */}
                <Button
                    value={
                        <img src={findIcon} alt="Find" className="w-8 h-8" />
                    }
                    tooltip="Find"
                    tooltipId="btnFind"
                    className="px-2"
                />

                {/* News button */}
                <Button
                    value={
                        <img src={newsIcon} alt="News" className="w-8 h-8" />
                    }
                    tooltip="News"
                    tooltipId="btnNews"
                    className="px-2"
                />

                {/* Notifications button */}
                <Button
                    value={
                        <img src={notificationsIcon} alt="Notifications" className="w-8 h-8" />
                    }
                    tooltip="Notificatons"
                    tooltipId="btnNotifications"
                    className="px-2"
                />

                {/* Wallets button */}
                <Button
                    value={
                        <img src={walletsIcon} alt="Wallets" className="w-8 h-8" />
                    }
                    tooltip="Wallets"
                    tooltipId="btnWallets"
                    className="px-2"
                />

                {/* Profile button */}
                <ProfileButton
                    user={ User.getTestIntance() }
                />
            </div>

            {/* Body */}
            <div className="flex-1 flex flex-row overflow-hidden">
                {/* Side bar */}
                <div className="bg-[#0d1619] h-full w-fit overflow-y-scroll flex flex-col justify-start items-center sidebar">
                    {/* Home button */}
                    <SidebarButton
                        content={
                            <img src={homeIcon} alt="Home" className="w-8 h-8"/>
                        }
                        href="/"
                        tooltip="Home"
                        tooltipId="btnHome"
                        className="mx-2 my-3"
                    />

                    {/* Calendars button */}
                    <SidebarButton
                        content={
                            <img src={calendarIcon} alt="Calendars" className="w-8 h-8"/>
                        }
                        href="/"
                        tooltip="Calendars"
                        tooltipId="btnCalendars"
                        className="mx-2 mb-3"
                        selected
                    />

                    {/* Sales button */}
                    <SidebarButton
                        content={
                            <img src={salesIcon} alt="Sales" className="w-8 h-8"/>
                        }
                        href="/"
                        tooltip="Sales"
                        tooltipId="btnSales"
                        className="mx-2 mb-3"
                    />

                    {/* Clients button */}
                    <SidebarButton
                        content={
                            <img src={clientsIcon} alt="Clients" className="w-8 h-8"/>
                        }
                        href="/"
                        tooltip="Clients"
                        tooltipId="btnClients"
                        className="mx-2 mb-3"
                    />

                    {/* Catalogue button */}
                    <SidebarButton
                        content={
                            <img src={catalogueIcon} alt="Catalogue" className="w-8 h-8"/>
                        }
                        href="/"
                        tooltip="Catalogue"
                        tooltipId="btnCatalogue"
                        className="mx-2 mb-3"
                    />

                    {/* Online profile button */}
                    <SidebarButton
                        content={
                            <img src={onlineProfileIcon} alt="Online profile" className="w-8 h-8"/>
                        }
                        href="/"
                        tooltip="Online profile"
                        tooltipId="btnOnlineProfile"
                        className="mx-2 mb-3"
                    />

                    {/* Marketing button */}
                    <SidebarButton
                        content={
                            <img src={marketingIcon} alt="Marketing" className="w-8 h-8"/>
                        }
                        href="/"
                        tooltip="Marketing"
                        tooltipId="btnMarketing"
                        className="mx-2 mb-3"
                    />

                    {/* Payments button */}
                    <SidebarButton
                        content={
                            <img src={paymentsIcon} alt="Payments" className="w-8 h-8"/>
                        }
                        href="/"
                        tooltip="Payments"
                        tooltipId="btnPayments"
                        className="mx-2 mb-3"
                    />

                    {/* Teams button */}
                    <SidebarButton
                        content={
                            <img src={teamsIcon} alt="Teams" className="w-8 h-8"/>
                        }
                        href="/"
                        tooltip="Teams"
                        tooltipId="btnTeams"
                        className="mx-2 mb-3"
                    />

                    {/* Reports button */}
                    <SidebarButton
                        content={
                            <img src={reportsIcon} alt="Reports" className="w-8 h-8"/>
                        }
                        href="/"
                        tooltip="Reports"
                        tooltipId="btnReports"
                        className="mx-2 mb-3"
                    />

                    {/* Add-ons button */}
                    <SidebarButton
                        content={
                            <img src={addonsIcon} alt="Add-ons" className="w-8 h-8"/>
                        }
                        href="/"
                        tooltip="Add-ons"
                        tooltipId="btnAddons"
                        className="mx-2 mb-3"
                    />

                    {/* Business settings button */}
                    <SidebarButton
                        content={
                            <img src={businessSettings} alt="Business Settings" className="w-8 h-8"/>
                        }
                        href="/"
                        tooltip="Business Settings"
                        tooltipId="btnBusinessSettings"
                        className="mx-2 mb-3"
                    />
                </div>

                {/* View area */}
                <div className="flex-1">
                    <BrowserRouter>
                        <Routes>
                            <Route
                                path="/"
                                Component={NotFoundView}
                            />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}