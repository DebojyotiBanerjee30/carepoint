import { Bell, HeartPulse, UserRound } from "lucide-react";

interface HeaderProps {
  userName: string;
  userRole: string;
}

const Header = ({ userName, userRole }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center gap-2">
        <HeartPulse className="text-[#2878C8]" size={28} />
        <h1 className="text-xl font-bold text-[#173B63]">CarePoint</h1>
      </div>

      <div className="flex items-center gap-5">
        <button aria-label="Notifications">
          <Bell className="text-slate-600" />
        </button>

        <div className="flex items-center gap-2">
          <UserRound className="text-[#2878C8]" />

          <div>
            <p className="font-semibold text-[#173B63]">{userName}</p>
            <p className="text-sm text-slate-500">{userRole}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
