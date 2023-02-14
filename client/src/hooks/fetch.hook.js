import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_DOMAIN_SERVER;

export default function useFetch(query) {
	const [getData, setData] = useState({
		isLoading: false,
		apiData: undefined,
		status: null,
		serverEror: null,
	});

	useEffect(() => {
		if (!query) return;

		const fetchData = async () => {
			try {
				setData((prev) => ({ ...prev, isLoading: true }));

				const { data, status } = await axios.get(`/${query}`);

				if (status === 201) {
					setData((prev) => ({
						...prev,
						isLoading: false,
						apiData: data,
						status: status,
					}));
				}

				setData((prev) => ({ ...prev, isLoading: true }));
			} catch (error) {
				setData((prev) => ({ ...prev, isLoading: false, serverEror: error }));
			}
		};

		fetchData();
	}, [query]);

	return [getData, setData];
}
