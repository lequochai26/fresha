import { HeaderBarButtonProperties } from "../components/HeaderBarButton";
import findIcon from '../icons/find.svg';
import newsIcon from '../icons/news.svg';
import notificationsIcon from '../icons/notifications.svg';
import walletsIcon from '../icons/wallets.svg';

const headerBarbuttons: HeaderBarButtonProperties[] = [
    // Find button
    {
        value: <img src={findIcon} alt="Find" className="w-8 h-8" />,
        tooltip: "Find",
        tooltipId: "btnFind",
        className: "px-2"
    },

    // News button
    {
        value: <img src={newsIcon} alt="News" className="w-8 h-8" />,
        tooltip: "News",
        tooltipId: "btnNews",
        className: "px-2"
    },

    // Notifications button
    {
        value: <img src={notificationsIcon} alt="Notifications" className="w-8 h-8" />,
        tooltip: "Notificatons",
        tooltipId: "btnNotifications",
        className: "px-2"
    },

    // Wallets button
    {
        value: <img src={walletsIcon} alt="Wallets" className="w-8 h-8" />,
        tooltip: "Wallets",
        tooltipId: "btnWallets",
        className: "px-2"
    },
];

function getHeaderBarButtons() {
    return [ ...headerBarbuttons ];
}

export default getHeaderBarButtons;