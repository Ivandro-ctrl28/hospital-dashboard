import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-[#0F172A]">

            <Sidebar />

            <div className="flex flex-1 flex-col lg:ml-72">

                <Navbar />

                <main className="flex-1 p-6 md:p-8">
                    <Outlet />
                </main>

            </div>

        </div>
    );
};

export default DashboardLayout;