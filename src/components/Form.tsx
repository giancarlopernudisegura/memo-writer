"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { DatePicker } from "@nextui-org/date-picker";
import { Checkbox } from "@nextui-org/checkbox";

export default function Form() {
	return <>
		<Dropdown>
			<DropdownTrigger>
				<Button>Select classification level</Button>
			</DropdownTrigger>
			<DropdownMenu>
				<DropdownItem>UNCLASSIFIED</DropdownItem>
				<DropdownItem>PROTECTED A</DropdownItem>
				<DropdownItem>PROTECTED B</DropdownItem>
			</DropdownMenu>
		</Dropdown>
		<Accordion
			selectionMode="multiple"
			variant="light"
			defaultExpandedKeys={[1, 2, 3]}
		>
			<AccordionItem key={1} title="Header">
				<Input label="File number" />
				<DatePicker label="Date" />
				<Input label="Addressee" />
				<Checkbox>Through CoC</Checkbox>
				<Input label="Title" />
			</AccordionItem>
			<AccordionItem key={2} title="Content">
				...
			</AccordionItem>
			<AccordionItem key={3} title="Signature Block">
				<Input label="Name" />
				<Input label="Rank" />
				<Input label="Position" />
				<Input label="Unit" />
			</AccordionItem>
		</Accordion>
	</>;
}
