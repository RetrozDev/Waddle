import classNames from "classnames";
import styles from "./Checkbox.module.css";

export type CheckboxProps = {
	/**Checkbox variant (default, switch, or rounded).*/
	variant?: "default" | "switch" | "rounded";

	/*** Checkbox size (sm, md, or lg).*/
	size?: "sm" | "md" | "lg";

	/**Indicates if the checkbox is disabled.*/
	disabled?: boolean;

	/**Function called when the checkbox value changes.*/
	onChange?: () => void;

	/**Label displayed next to the checkbox.*/
	label?: string;

	/**Additional CSS classes to apply to the checkbox.*/
	className?: string;

	/**Name attribute for the checkbox.*/
	htmlFor?: string;
};

/** A checkbox */
export function Checkbox({
	variant = "default",
	size = "md",
	disabled,
	label,
	htmlFor,
	className,
	...props
}: CheckboxProps) {
	return (
		<>
			<input
				name={htmlFor}
				className={classNames(
					styles.input,
					styles[variant],
					styles[size],
					className,
				)}
				type="checkbox"
				disabled={disabled}
				{...props}
			/>
			<label
				htmlFor={htmlFor}
				className={classNames(styles[size], styles.label, className)}
			>
				{label}
			</label>
		</>
	);
}
