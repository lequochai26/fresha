import HeaderBarButton from "../components/HeaderBarButton";
import ProfileButton from "../components/ProfileButton";
import User from "../models/User";
import freshaLogo from '../icons/fresha.svg';
import SidebarButton from "../components/SidebarButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import getHeaderBarButtons from "../data/HeaderBarButtons";
import getSidebarButtons from "../data/SidebarButtons";
import routes from "../views/routes";

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

                {/* Header bar buttons embedding */}
                {
                    getHeaderBarButtons()
                        .map(
                            props => HeaderBarButton(props)
                        )
                }

                {/* Profile button */}
                <ProfileButton
                    user={ User.getTestIntance() }
                />
            </div>

            {/* Body */}
            <div className="flex-1 flex flex-row overflow-hidden">
                {/* Side bar */}
                <div className="bg-[#0d1619] h-full w-fit overflow-y-scroll flex flex-col justify-start items-center sidebar">
                    {/* Sidebar buttons embedding */}
                    {
                        getSidebarButtons()
                            .map(
                                props => SidebarButton(props)
                            )
                    }
                </div>

                {/* View area */}
                <div className="flex-1">
                    <BrowserRouter>
                        <Routes>
                            {/* Routes embedding */}
                            {
                                Object.keys(routes)
                                    .map(
                                        route => (
                                            <Route
                                                path={route}
                                                Component={routes[route]}
                                            />
                                        )
                                    )
                            }
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}