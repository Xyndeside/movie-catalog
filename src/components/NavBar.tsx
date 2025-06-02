import NavLinkItem from "./NavLinkItem.tsx";

export default function NavBar() {
    return (
        <nav className="space-x-6">
            <NavLinkItem to="/" text="Главная" />
            <NavLinkItem to="/catalog" text="Каталог" />
        </nav>
    );
}