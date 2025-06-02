import {NavLink} from "react-router-dom";

interface NavLinkItemProps {
    to: string;
    end?: boolean;
    text: string;
}

function NavLinkItem({ to, end = false, text }: NavLinkItemProps) {
    return (
        <NavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                `transition-all duration-300 hover:text-blue-300 ${
                    isActive ? 'text-blue-400 font-semibold' : 'text-white'
                }`
            }
        >
            {text}
        </NavLink>
    );
}

export default NavLinkItem;