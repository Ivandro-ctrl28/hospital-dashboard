import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Hospital } from "lucide-react";
import { NAV_ITEMS } from "../../constants/navigation";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Botão Mobile */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed top-5 left-5 z-50 rounded-lg bg-blue-600 p-2 text-white shadow-lg transition hover:bg-blue-700 lg:hidden"
            >
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed left-0 top-0 z-40
                    flex h-screen w-72 flex-col
                    bg-[#111827]
                    shadow-2xl
                    transition-transform
                    duration-300
                    ease-in-out
                    ${
                        open
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                    lg:translate-x-0
                `}
            >
                {/* Logo */}
                <div className="flex items-center gap-3 border-b border-gray-700 p-6">
                    <Hospital
                        size={36}
                        className="text-blue-500"
                    />

                    <div>
                        <h1 className="text-xl font-bold text-white">
                            MediCare
                        </h1>

                        <p className="text-sm text-gray-400">
                            Hospital System
                        </p>
                    </div>
                </div>

                {/* Navegação */}
                <nav className="mt-8 flex flex-col gap-2 px-4">
                    {NAV_ITEMS.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.title}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `
                                    flex items-center
                                    gap-4
                                    rounded-xl
                                    px-4
                                    py-3
                                    font-medium
                                    transition-all
                                    duration-200
                                    ${
                                        isActive
                                            ? "bg-blue-600 text-white shadow-md"
                                            : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                    }
                                `
                                }
                            >
                                <Icon size={22} />

                                <span>{item.title}</span>
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Rodapé */}
                <div className="mt-auto border-t border-gray-700 p-6">
                    <p className="text-center text-xs text-gray-500">
                        © 2026 MediCare
                    </p>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;