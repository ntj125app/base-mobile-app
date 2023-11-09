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
    root: {
        class: [
            "py-1 bg-white border border-gray-300 rounded-lg w-[12.5rem]",
            "dark:border-blue-900/40 dark:bg-gray-900",
        ],
    },
    menu: {
        class: ["outline-none", "m-0 p-0 list-none"],
    },
    menuitem: "relative",
    content: ({ context }: { context: any }) => ({
        class: [
            "transition-shadow duration-200 border-none rounded-none",
            "hover:bg-gray-200 hover:text-gray-700 dark:hover:text-white/80 dark:hover:bg-gray-800/80", //Hover
            {
                "text-gray-700": !context.focused && !context.active,
                "bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90":
                    context.focused && !context.active,
                "bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80":
                    context.focused && context.active,
                "bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80":
                    !context.focused && context.active,
            },
        ],
    }),
    action: ({ context }: { context: any }) => ({
        class: [
            "py-3 px-5 select-none",
            "flex items-center cursor-pointer no-underline relative overflow-hidden",
            {
                "text-gray-700 dark:text-white/80 hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80":
                    !context.active,
                "text-blue-600 bg-blue-100": context.active,
            },
        ],
    }),
    icon: "mr-2",
    submenuicon: "ml-auto",
    separator: "border-t border-gray-300 my-1 dark:border-blue-900/40",
    submenu: {
        class: [
            "py-1 bg-white dark:bg-gray-900 border-0 shadow-md min-w-full",
            "absolute z-10",
            "left-full top-0",
        ],
    },
    transition: TRANSITIONS.overlay,
};
