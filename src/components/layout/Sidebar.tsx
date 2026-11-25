import type { NavigationItem } from "../../config/navigation";
import { NavLink } from "react-router";

interface SidebarProps {
  items: NavigationItem[];
}

const Sidebar = ({ items }: SidebarProps) => {
  return (
    <div className="flex w-full shrink-0 flex-row gap-2 overflow-x-auto bg-white p-3 md:w-64 md:flex-col md:overflow-visible">
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 rounded-lg whitespace-nowrap px-4 py-3 bg-blue-50 text-[#2878C8]"
              : "flex items-center gap-3 rounded-lg whitespace-nowrap px-4 py-3 text-slate-600 hover:bg-slate-100"
          }
        >
          <item.icon />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
