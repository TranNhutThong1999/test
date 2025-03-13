async function getData() {
	const res = await fetch('https://dogapi.dog/api/v2/breeds');
	return res.json();
}

export default async function Page() {
	const data = await getData();
	console.log(data.data, 111);

	return (
		<div>
			<h1>Server Component</h1>
		</div>
	);
}
