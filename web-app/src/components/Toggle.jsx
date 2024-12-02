export const Toggle = ({ label, state, onToggle, className, color, outline }) => (
    <button
        onClick={onToggle}
        className={`btn btn${outline ? '-outline' : ''}-${color ?? (state ? 'primary' : 'secondary')} ${state ? 'active' : ''} ${className}`}
    >
        {label}
    </button>
);