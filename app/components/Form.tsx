"use client";
import { useFormik } from "formik";

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

	const { touched, handleBlur, errors, handleChange, values, handleSubmit } =
		useFormik({
			initialValues: initialValues,
			onSubmit: onSubmit,
			validate: validate,
		});

	console.log(touched);

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center">
			<input
				type="text"
				onChange={handleChange}
				value={values.name}
				className="p-2 rounded-md "
				placeholder="Name..."
				name="name"
				onBlur={handleBlur}
			/>
			{touched.name && errors.name ? (
				<span className="text-red-500">{errors.name}</span>
			) : null}
			<input
				type="email"
				onChange={handleChange}
				value={values.email}
				className="p-2 rounded-md "
				placeholder="Email..."
				name="email"
				onBlur={handleBlur}
			/>
			{touched.email && errors.email ? (
				<span className="text-red-500">{errors.email}</span>
			) : null}
			<input
				type="text"
				onChange={handleChange}
				value={values.channel}
				className="p-2 rounded-md "
				placeholder="Channel..."
				name="channel"
				onBlur={handleBlur}
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
