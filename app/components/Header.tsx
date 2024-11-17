import { CiShoppingCart } from "react-icons/ci";
import { RiSearch2Line } from "react-icons/ri";

/* eslint-disable @next/next/no-img-element */
function Header() {
  const NavItems = [
    { nav: "Home" },
    { nav: "Blog" },
    { nav: "Our Menu" },
    { nav: "Contact Us" },
  ];

  return (
    <header className="flex fixed z-50 top-0 w-full max-w-[1440px] bg-black justify-between items-center border">
        <div>
          <p className="italic">This Coffee</p>
        </div>
        <nav className="flex gap-4">
          {NavItems.map((item, index) => (
            <ul key={index}>
              <li>{item.nav}</li>
            </ul>
          ))}
        </nav>
        <div className="flex gap-3">
          <CiShoppingCart className="w-8 h-8" />
          <RiSearch2Line className="w-8 h-8" />
        </div>
    </header>
  );
}

export default Header;
