import { objectInterface } from "./interfaces";

const getConvers = async () => {
	const data = await fetch(
		"https://617b0784cb1efe001701015c.mockapi.io/convers",
		{ method: "GET" }
	);
	const jn: objectInterface[] = await data.json();
	console.log(jn);
	return jn;
};

const randomNum = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export { getConvers, randomNum };
