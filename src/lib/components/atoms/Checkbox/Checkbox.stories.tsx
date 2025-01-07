import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
	title: "Atoms/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		variant: {
			table: {
				type: { summary: "default | switch | rounded" },
				defaultValue: { summary: "default" },
			},
		},
		size: {
			table: {
				type: { summary: "sm | md | lg" },
				defaultValue: { summary: "md" },
			},
		},
	},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: "default",
		label: "Default checkbox",
	},
};

export const Switch: Story = {
	args: {
		variant: "switch",
		label: "Switch checkbox",
	},
};

export const Rounded: Story = {
	args: {
		variant: "rounded",
		label: "Rounded Checkbox",
	},
};
