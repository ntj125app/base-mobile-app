/* eslint-disable @typescript-eslint/no-explicit-any */
export const TRANSITIONS = {
    overlay: {
        enterFromClass: "opacity-0 scale-75",
        enterActiveClass:
            "transition-transform transition-opacity duration-150 ease-in",
        leaveActiveClass: "transition-opacity duration-150 ease-linear",
        leaveToClass: "opacity-0",
    },
};

export default {
    root: "py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border border-gray-300 dark:border-blue-900/40 rounded-md w-48",
    menu: {
        class: ["m-0 p-0 list-none", "outline-none"],
    },
    content: ({ context }: { context: any }) => ({
        class: [
            "text-gray-700 dark:text-white/80 transition-shadow duration-200 rounded-none",
            "hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80", // Hover
            {
                "bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90":
                    context.focused,
            },
        ],
    }),
    action: {
        class: [
            "text-gray-700 dark:text-white/80 py-3 px-5 select-none",
            "cursor-pointer flex items-center no-underline overflow-hidden relative",
        ],
    },
    icon: "text-gray-600 dark:text-white/70 mr-2",
    submenuheader: {
        class: [
            "m-0 p-3 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 font-bold rounded-tl-none rounded-tr-none",
        ],
    },
    transition: TRANSITIONS.overlay,
};
