import * as yup from "yup";

export const addTaskSchema = yup.object().shape({
	name: yup
		.string()
		.min(3, "Name must have atleast 3 characters")
		.required("Required"),
	description: yup
		.string()
		.min(25, "Project description must have atleast 25 characters")
		.required("Please enter a description for your project"),
	deadline: yup.string().required("Required"),
	assignedUser: yup
		.string()
		.min(3, "Name must have atleast 3 characters")
		.required("Please enter duration"),
});
