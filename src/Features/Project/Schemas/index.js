import * as yup from "yup";

export const addProjectSchema = yup.object().shape({
	name: yup
		.string()
		.min(3, "Project name must have atleast 3 characters")
		.required("Please enter name of your project"),
	description: yup
		.string()
		.min(25, "Project description must have atleast 25 characters")
		.required("Please enter a description for your project"),
	duration: yup.string().required("Please enter duration"),
});
