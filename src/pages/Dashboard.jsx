import {
    Users,
    Stethoscope,
    DollarSign,
    CalendarDays,
} from "lucide-react";

import StatCard from "../components/StatCard/StatCard";

const Dashboard = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-5xl font-bold text-white">
                    Welcome Back Dr. Ivandro
                </h1>
                <p className="mt-2 text-gray-400">
                    Here's what's happening in your hospital today.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    title="Patients"
                    value="1,284"
                    growth="+12%"
                    icon={Users}
                    color="bg-blue-600/20 text-blue-400"
                />
                <StatCard
                    title="Doctors"
                    value="48"
                    growth="+3%"
                    icon={Stethoscope}
                    color="bg-green-600/20 text-green-400"
                />
                <StatCard
                    title="Revenue"
                    value="$58,420"
                    growth="+18%"
                    icon={DollarSign}
                    color="bg-yellow-500/20 text-yellow-400"
                />
                <StatCard
                    title="Appointments"
                    value="126"
                    growth="+8%"
                    icon={CalendarDays}
                    color="bg-purple-600/20 text-purple-400"
                />
            </div>
        </div>
    );
};

export default Dashboard;