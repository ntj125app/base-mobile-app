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
    root: ({ props }: { props: any }) => ({
        class: [
            "inline-flex relative",
            {
                "opacity-60 select-none pointer-events-none cursor-default":
                    props.disabled,
            },
        ],
    }),
    panel: "p-5 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 shadow-md rounded-md",
    meter: "mb-2 bg-gray-300 dark:bg-gray-700 h-3",
    meterlabel: ({
        instance,
        props,
    }: {
        instance: { meter: { strength: any } };
        props: { toggleMask: any };
    }) => ({
        class: [
            "transition-width duration-1000 ease-in-out h-full",
            {
                "bg-red-500": instance?.meter?.strength == "weak",
                "bg-orange-500": instance?.meter?.strength == "medium",
                "bg-green-500": instance?.meter?.strength == "strong",
            },
            { "pr-[2.5rem] ": props.toggleMask },
        ],
    }),
    showicon: {
        class: [
            "absolute top-1/2 -mt-2",
            "right-3 text-gray-600 dark:text-white/70",
        ],
    },
    hideicon: {
        class: [
            "absolute top-1/2 -mt-2",
            "right-3 text-gray-600 dark:text-white/70",
        ],
    },
    transition: TRANSITIONS.overlay,
};
