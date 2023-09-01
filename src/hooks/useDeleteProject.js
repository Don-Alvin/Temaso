import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProject as deleteProjectFn } from "../apis/projectsApi";
import { toast } from "react-toastify";

const useDeleteProject = () => {
	const queryClient = useQueryClient();

	const { mutate: deleteProject } = useMutation({
		mutationFn: deleteProjectFn,
		onSuccess: () => {
			toast.success("Project successfully deleted");
			queryClient.invalidateQueries({
				queryKey: ["projects"],
			});
		},

		onError: (err) => toast.error(err.message),
	});

	return { deleteProject };
};

export default useDeleteProject;
