"use client";
import { useFormik } from "formik";
import * as Yup from "yup";

type FormDataType = {
	name: string;
	email: string;
	channel: string;
};

type FormDataError = {
	name: string;
	email: string;
	channel: string;
};

export const Form = () => {
	const initialValues: FormDataType = {
		name: "",
		email: "",
		channel: "",
	};

	const validationSchema = Yup.object({
		name: Yup.string().required("Required"),
		email: Yup.string().email("Invalid Email").required("Required"),
		channel: Yup.string().required("Required"),
	});

	function onSubmit(formData: FormDataType) {
		console.log(formData);
	}

	function validate(formData: FormDataType) {
		let errors: FormDataError = { name: "", email: "", channel: "" };

		if (!formData.name) {
			errors.name = "Name is required";
		}
		if (!formData.email) {
			errors.email = "Email is required";
		} else if (
			!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(values.email)
		) {
			errors.email = "Invalid Email";
		}
		if (!formData.channel) {
			errors.channel = "Channel is required";
		}

		return errors;
	}

	const {
		touched,
		handleBlur,
		errors,
		handleChange,
		getFieldProps,
		values,
		handleSubmit,
	} = useFormik({
		initialValues: initialValues,
		onSubmit: onSubmit,
		validationSchema: validationSchema,
		//validate: validate,
	});

	console.log(touched);

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center">
			<input
				type="text"
				className="p-2 rounded-md "
				placeholder="Name..."
				{...getFieldProps("name")}
			/>
			{touched.name && errors.name ? (
				<span className="text-red-500">{errors.name}</span>
			) : null}
			<input
				type="email"
				className="p-2 rounded-md "
				placeholder="Email..."
				{...getFieldProps("email")}
			/>
			{touched.email && errors.email ? (
				<span className="text-red-500">{errors.email}</span>
			) : null}
			<input
				type="text"
				className="p-2 rounded-md "
				placeholder="Channel..."
				{...getFieldProps("channel")}
			/>
			{touched.channel && errors.channel ? (
				<span className="text-red-500">{errors.channel}</span>
			) : null}
			<button type="submit" className="p-2 rounded-md bg-white text-black">
				Submit
			</button>
		</form>
	);
};
