import { Outlet } from "react-router";
import type { NavigationItem } from "../config/navigation";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

interface DashboardLayoutProps {
  items: NavigationItem[];
  userName: string;
  userRole: string;
}

const DashboardLayout = ({
  items,
  userName,
  userRole,
}: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col gap-2 bg-slate-50 p-4">
      <Header userName={userName} userRole={userRole} />
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar items={items} />

        <main className="min-w-0 flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
