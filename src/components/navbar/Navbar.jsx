import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
    Search,
    Bell,
    MessageSquare,
    Calendar,
    Moon,
    Sun,
    UserCircle,
} from "lucide-react";

const Navbar = () => {
    const navRef = useRef(null);

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        gsap.fromTo(
            navRef.current,
            {
                y: -80,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
            }
        );
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <header
            ref={navRef}
            className="
                sticky
                top-0
                z-30
                flex
                items-center
                justify-between
                border-b
                border-gray-800
                bg-[#09090B]/80
                backdrop-blur-xl
                px-4
                md:px-8
                py-4  text-white
            "
        >
            {/* SEARCH */}

            <div
                className="
                    hidden
                    md:flex
                    items-center
                    gap-3
                    bg-[#111827]
                    px-4
                    py-2
                    rounded-xl
                    w-[340]
                    border
                    border-gray-700
                    focus-within:border-blue-500
                    transition
                "
            >
                <Search
                    size={18}
                    className="text-white"
                />

                <input
                    type="text"
                    placeholder="Search patients, doctors..."
                    className="
                        bg-transparent
                        outline-none
                        text-sm
                        text-white
                        w-full
                        placeholder:text-gray-500
                    "
                />
            </div>

            {/* MOBILE TITLE */}

            <div className="md:hidden">
                <h2 className="text-lg font-semibold text-white">
                    Dashboard
                </h2>
            </div>

            {/* ACTIONS */}

            <div className="flex items-center gap-2 md:gap-5">

                {/* Calendar */}

                <button
                    className="
                        relative
                        p-2
                        rounded-lg
                        text-white
                        hover:bg-gray-800
                        hover:text-blue-400
                        transition
                    "
                >
                    <Calendar size={20} />
                </button>

                {/* Messages */}

                <button
                    className="
                        relative
                        p-2
                        rounded-lg
                        hover:bg-gray-800
                        hover:text-blue-400
                        transition
                    "
                >
                    <MessageSquare size={20} />

                    <span
                        className="
                            absolute
                            -top-1
                            -right-1
                            flex
                            h-5
                            w-5
                            items-center
                            justify-center
                            rounded-full
                            bg-green-500
                            text-[10px]
                            font-bold
                            text-white
                        "
                    >
                        3
                    </span>
                </button>

                {/* Notifications */}

                <button
                    className="
                        relative
                        p-2
                        rounded-lg
                        hover:bg-gray-800
                        hover:text-blue-400
                        transition
                    "
                >
                    <Bell size={20} />

                    <span
                        className="
                            absolute
                            -top-1
                            -right-1
                            flex
                            h-5
                            w-5
                            items-center
                            justify-center
                            rounded-full
                            bg-red-500
                            text-[10px]
                            font-bold
                            text-white
                        "
                    >
                        5
                    </span>
                </button>

                {/* Theme */}

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="
                        p-2
                        rounded-lg
                        hover:bg-gray-800
                        transition
                    "
                >
                    {darkMode ? (
                        <Sun
                            size={20}
                            className="text-yellow-400"
                        />
                    ) : (
                        <Moon
                            size={20}
                            className="text-blue-400"
                        />
                    )}
                </button>

                {/* Divider */}

                <div className="hidden md:block h-8 w-px bg-gray-700" />

                {/* Profile */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-2
                        py-1
                        cursor-pointer
                        hover:bg-gray-800
                        transition
                    "
                >
                    <UserCircle
                        size={36}
                        className="text-white"
                    />

                    <div className="hidden lg:block">
                        <p className="text-sm font-semibold text-white">
                            Dr. Ivandro
                        </p>

                        <p className="text-xs text-gray-400">
                            Cardiologist
                        </p>
                    </div>
                </div>

            </div>

        </header>
    );
};

export default Navbar;