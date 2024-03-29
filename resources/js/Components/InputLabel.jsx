export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`tw-block  tw-text-xl   ` + className}>
            {value ? value : children}
        </label>
    );
}
