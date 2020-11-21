import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url) => {
	const [response, setResponse] = useState(null);

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setResponse(res.data.results);
			})
			.catch((error) => {
				setResponse([]);
			});
	}, [url]);

	return response;
};

export default useAxios;
