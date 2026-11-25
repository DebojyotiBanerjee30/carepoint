import type { LucideIcon } from "lucide-react";
import { LayoutDashboard, CalendarDays, Users } from "lucide-react";

export interface NavigationItem {
  label: string;
  path: string;
  icon: LucideIcon;
  badge?: number;
}

export const patientNavigation: NavigationItem[] = [
  {
    label: "Dashboard",
    path: "/patient/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Appointments",
    path: "/patient/appointments",
    icon: CalendarDays,
  },
  {
    label: "Doctors",
    path: "/patient/doctors",
    icon: Users,
  },
];
