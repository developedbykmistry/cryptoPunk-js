// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3e47e4be9bmsh08108942a833e05p18fe5fjsnc6c16ccb625c',
// 		'X-RapidAPI-Host': 'opensea13.p.rapidapi.com'
// 	}
// };

// fetch('https://opensea13.p.rapidapi.com/assets?collection_slug=cryptopunks&order_direction=desc&limit=15&include_orders=false', options)
// 	.then(response => response.json())
// 	.then(response => getData(response.assets))
// 	.catch(err => console.error(err));

// const getData = (data) => {
//     data.forEach(element => {
// 		displayData(element);
// 	});
// 	console.log(data)
// }


// const displayData = (data) => {
// 	document.querySelector('.nftGridContainer').innerHTML += `
// 	<div class="nft">
// 	<img src="${data.image_url}" alt="">
// 	<div class="nft-info">
// 		<h1>${data.name}</h1>
// 		<h3>#${data.token_id}</h3>
// 		<p>
// 			<img src="./assets/eth.png" class="ethIcon">
// 			${price()}
// 		</p>
// 	</div>
// </div>
// `
// }

// function price() {
// 	let x = Math.floor(Math.random() * 10);
// 	return x;
// }

