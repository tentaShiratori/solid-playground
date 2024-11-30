import { createForm, getValues, insert, valiForm } from "@modular-forms/solid";
import { action } from "@solidjs/router";
import { For, createEffect } from "solid-js";
import * as v from "valibot";

const isFile = (input: unknown) => input instanceof File;

const SpecialSchema = v.object({
	number: v.number(),
	range: v.number(),
	checkbox: v.object({
		array: v.array(v.string()),
		boolean: v.boolean(),
	}),
	file: v.object({
		list: v.array(v.custom<File>(isFile)),
		item: v.custom<File>(isFile),
	}),
});

type SpecialForm = v.InferInput<typeof SpecialSchema>;

const submit = action(async (e) => {
	console.log(e);
}, "submit");
export default function Page() {
	const [form, { Form, Field, FieldArray }] = createForm<SpecialForm>({
		initialValues: { number: 0 },
		// validate: valiForm(SpecialSchema),
	});
	createEffect(() => {
		console.log(getValues(form));
	});
	return (
		<div>
			<h1>Modular Forms</h1>
			<Form action={submit} method="post">
				<Field name="number" type="number">
					{(field, props) => <input {...props} type="number" />}
				</Field>
				<Field name="range" type="number">
					{(field, props) => (
						<input
							{...props}
							type="range"
							onChange={(e) => {
								e.currentTarget;
							}}
						/>
					)}
				</Field>
				<FieldArray name="checkbox.array">
					{(fieldArray) => (
						<>
							<For each={fieldArray.items}>
								{(item, index) => (
									<div>
										<Field name={`checkbox.array.${index()}`}>
											{(field, props) => <input {...props} type="text" />}
										</Field>
									</div>
								)}
							</For>
							<button
								type="button"
								onClick={() => insert(form, "checkbox.array", { value: "" })}
							>
								Add
							</button>
						</>
					)}
				</FieldArray>
				<Field name="checkbox.boolean" type="boolean">
					{(field, props) => <input {...props} type="checkbox" />}
				</Field>
				<Field name="file.list" type="File[]">
					{(field, props) => <input {...props} type="file" multiple />}
				</Field>
				<Field name="file.item" type="File">
					{(field, props) => {
						return <input {...props} type="file" />;
					}}
				</Field>
				<button type="submit">Submit</button>
			</Form>
		</div>
	);
}
