import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../apis/projectsApi";

export const useProjects = () => {
	const { isInitialLoading, error, isError, projects } = useQuery({
		queryKey: ["projects"],
		queryFn: getProjects,
	});

	return { isInitialLoading, error, isError, projects };
};
