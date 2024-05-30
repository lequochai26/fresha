import { MouseEventHandler } from "react";
import User from "../models/User";

export interface ProfileButtonProperties {
    user: User;
    onClick?: MouseEventHandler;
}

export default function ProfileButton({ user, onClick }: ProfileButtonProperties) {
    // Design:
    return (
        <div className="rounded-full bg-[#e7e8ff] w-[44px] h-[44px] text-[#6950f3] flex items-center justify-center text-md font-bold ml-5 cursor-pointer animate-test" onClick={onClick}>
            <p className="block">
                { user.getAvatarName() }
            </p>
        </div>
    );
}