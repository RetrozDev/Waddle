import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
	title: "Atoms/Button",
	component: Button,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		variant: {
			table: {
				type: { summary: "primary | secondary" },
				defaultValue: { summary: "primary" },
			},
		},
		size: {
			table: {
				type: { summary: "sm | md | lg" },
				defaultValue: { summary: "primary" },
			},
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: "primary",
		size: "md",
		children: "Test",
	},
};
