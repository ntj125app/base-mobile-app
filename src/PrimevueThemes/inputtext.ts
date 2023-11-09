/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
    root: ({ props, context }: { props: any; context: any }) => ({
        class: [
            "m-0",
            "font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg",
            {
                "hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]":
                    !context.disabled,
                "opacity-60 select-none pointer-events-none cursor-default":
                    context.disabled,
            },
            {
                "text-lg px-4 py-4": props.size == "large",
                "text-xs px-2 py-2": props.size == "small",
                "p-3 text-base": props.size == null,
            },
        ],
    }),
};
