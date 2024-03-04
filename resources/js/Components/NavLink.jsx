import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'tw-h-12 tw-inline-flex tw-items-center tw-px-6 tw-pt-1 tw-border-b-2 tw-text-md tw-font-medium tw-leading-5 tw-transition tw-duration-150 focus:tw-outline-none tw-ease-in-out tw-w-fit ' +
                (active
                    ? 'tw-border-indigo-400 dark:tw-border-indigo-600 tw-text-gray-900 dark:tw-text-gray-100 '
                    : 'tw-border-transparent tw-text-gray-500 dark:tw-text-gray-400 hover:tw-text-gray-700 dark:tw-hover:text-gray-300 focus:tw-text-gray-700 dark:tw-focus:text-gray-300 focus:tw-border-gray-300 dark:focus:tw-border-gray-700 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
