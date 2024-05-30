import Button from "../components/Button";
import ProfileButton from "../components/ProfileButton";
import User from "../models/User";
import freshaLogo from '../icons/fresha.svg';
import findIcon from '../icons/find.svg';
import newsIcon from '../icons/news.svg';
import notificationsIcon from '../icons/notifications.svg';
import walletsIcon from '../icons/wallets.svg';

export default function GeneralPage() {
    // Design
    return (
        // Whole page
        <div className="w-screen h-screen flex flex-col">
            {/* Header bar */}
            <div className="px-5 py-5 flex justify-start items-center border-b border-solid border-b-gray-300">
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

            {/* View area */}
            <div className="bg-red-600 flex-1">
                Hello
            </div>
        </div>
    );
}