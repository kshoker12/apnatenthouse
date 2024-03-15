export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'tw-rounded-full tw-border-gray-600 tw-text-indigo-600 tw-shadow-sm focus:tw-ring-indigo-500 tw-w-6 tw-h-6 ' +
                className
            }
        />
    );
}
