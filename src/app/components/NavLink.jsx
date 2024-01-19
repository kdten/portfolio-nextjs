import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#121212] dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 betterhover:text-[#ADB7BE] dark:betterhover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
