import Link from "next/link";

// ? Centralized class names to avoid duplication
const NAV_LINK_CLASS = "text-lg text-primary hover:text-primary-600";

// ? Reusable component for navigation links
export const NavLink = ({
  route,
  label,
  onClick,
}: {
  route: string;
  label: string;
  onClick?: () => void;
}) => (
  <Link href={route} className={NAV_LINK_CLASS} onClick={onClick}>
    {label}
  </Link>
);
