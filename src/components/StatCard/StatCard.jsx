import { ArrowUpRight } from "lucide-react";

const StatCard = ({
    title,
    value,
    icon: Icon,
    growth,
    color,
}) => {
    return (
        <div
            className="
                rounded-2xl
                border
                border-gray-800
                bg-[#111827]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500
                hover:shadow-xl
            "
        >
            <div className="flex items-center justify-between">

                <div>

                    <p className="text-gray-400 text-sm">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                        {value}
                    </h2>

                </div>

                <div
                    className={`
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-xl
                        ${color}
                    `}
                >
                    <Icon size={28} />
                </div>

            </div>

            <div className="mt-5 flex items-center gap-2">

                <ArrowUpRight
                    size={16}
                    className="text-green-400"
                />

                <span className="text-green-400 text-sm">
                    {growth}
                </span>

                <span className="text-gray-500 text-sm">
                    this month
                </span>

            </div>

        </div>
    );
};

export default StatCard;