import { NavbarBrandProps } from '../Navbar.types';

export const NavbarMenu = ({ logo, title }: NavbarBrandProps) => {
  return (
    <div className="flex items-center space-x-2">
      {logo && (
        <img src={logo} alt={title} className="h-8 w-8" />
      )}
      <span className="text-xl font-semibold">{title}</span>
    </div>
  );
};