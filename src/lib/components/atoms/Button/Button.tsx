import classNames from "classnames";
import styles from "./Button.module.css";

export type ButtonProps = {
	/** Button variant (primary, secondary, or ghost) */
	variant?: "primary" | "secondary" | "ghost";
	/** Button size (sm, md, or lg) */
	size?: "sm" | "md" | "lg";
	/** Indicates if the button is disabled */
	disabled?: boolean;
	/** Indicates if the button is in a loading state */
	loading?: boolean;
	/** Function called when the button is clicked */
	onClick?: () => void;
	/** Button content (text, React elements) */
	children: React.ReactNode;
	/** Additional CSS classes to apply to the button */
	className?: string;
};

/** A button */
export function Button({
	variant = "primary",
	size = "md",
	loading = false,
	disabled,
	className,
	children,
	...props
}: ButtonProps) {
	return (
		<button
			className={classNames(
				styles.button,
				styles[variant],
				styles[size],
				loading && styles.loading,
				className,
			)}
			disabled={disabled || loading}
			aria-busy={loading}
			type="button"
			{...props}
		>
			{loading && <span className={styles.loader} />}
			<span className={styles.content}>{children}</span>
		</button>
	);
}
