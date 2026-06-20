import {
    LayoutDashboard,
    Users,
    UserRound,
    CalendarDays,
    Microscope,
    Pill,
    Receipt,
    BarChart3,
    Settings,
} from "lucide-react";

export const NAV_ITEMS = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/",
    },
    {
        title: "Patients",
        icon: Users,
        path: "/patients",
    },
    {
        title: "Doctors",
        icon: UserRound,
        path: "/doctors",
    },
    {
        title: "Appointments",
        icon: CalendarDays,
        path: "/appointments",
    },
    {
        title: "Laboratory",
        icon: Microscope,
        path: "/laboratory",
    },
    {
        title: "Pharmacy",
        icon: Pill,
        path: "/pharmacy",
    },
    {
        title: "Billing",
        icon: Receipt,
        path: "/billing",
    },
    {
        title: "Reports",
        icon: BarChart3,
        path: "/reports",
    },
    {
        title: "Settings",
        icon: Settings,
        path: "/settings",
    },
];