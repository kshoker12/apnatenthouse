export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `tw-inline-flex tw-items-center tw-px-8 tw-py-2 tw-bg-blue-800 tw-border tw-border-transparent tw-rounded-md tw-font-semibold tw-text-4xl tw-text-white tw-uppercase tw-tracking-widest hover:tw-bg-blue-700 focus:tw-bg-blue-700 active:tw-bg-blue-900 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2 tw-transition tw-ease-in-out tw-duration-150 ${
                    disabled && 'tw-opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
