// ✅ Request-Response Cycle

	// request => url + http verb
    // response => status code + message body

// ✅ HTTP Verbs

    // CRUD => POST, GET, PATCH, DELETE

// ✅ CRUD with Fetch: GET Requests

	fetch('http://localhost:3000/pokemons') // returns a promise
    
    // // once first Promise is resolved...
    .then(resp => resp.json()) // ...convert the response into JSON and return another promise
    
    // // once second Promise is resolved...
    .then(pokemonArry => {

        // ...console.log the JS response
        // console.log(pokemonArry)
    });

// ✅ CRUD with Fetch: POST Requests
       
	// let comment = {user: "Emiley", content: "my comment" }; //object ordering doesn't matter; will add these items in as noted in the functionb below

	// fetch('http:localhost:3000/comments', {
	// 	// ❗ specify method
	// 	method: 'POST',
		
	// 	// ❗ specify headers
	// 	headers: {
	// 	'Content-Type': 'application/json', //the content of the body is JSON
	// 	},

	// 	// ❗ convert the item into a JSON string, necessary for compatibility with db.json 
	// 	body: JSON.stringify(comment),
	// })
	// .then(resp => resp.json())
	// .then(newComment => console.log(newComment));

// ✅ CRUD with Fetch: PATCH Requests

//I BROKE THIS

	// function updateItem(comment) { 
		
	// 	// ❗ make sure to include identifier (id) in request URL
	// 	fetch(`http://localhost:3000/comments/${comment.id}`, { //each comment has a unique id
			
	// 		// ❗ specify method
	// 		method: 'PATCH',

	// 		// ❗ specify headers
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},

	// 		// ❗ convert the item into a JSON string
	// 		body: JSON.stringify(comment)
	// 	})
	// 	.then(resp => resp.json())

	// 	// ❗ should return the updated JS object
	// 	.then(item => console.log(item)); //gives you back one comment you updated
	// }

	

// ✅ CRUD with Fetch: DELETE Requests

	function deleteItem(item) {

		fetch(`http:localhost:3000/pokemons/${item.id}`, {
			// ❗ specify method
			method: 'DELETE',
			
			// ❗ specify headers
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(resp => resp.json())

		// ❗ should return an empty JS object
		.then(item => console.log(item));
	}

// -------------------------------------------

// console.log("------------------------");
// console.log("⬇️ Break Out Activities ⬇️");
// console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
// console.log("💡 Use console.log() To Check Answers 💡");
// console.log("------------------------");

	// ❗ Use these constants / functions in your solutions
	const BASE_URL = 'http://localhost:3000';
	const pokeContainer = document.getElementById('poke-container');
	const commentsContainer = document.getElementById('comments-container');
	const commentsForm = document.getElementById('comments-form');
	
	function renderPokemon(pokemon) {

		//create elements; note that none are on DOM
		const pokeCard = document.createElement('div')
		const pokeImg = document.createElement('img')
		const pokeName = document.createElement('h3')
		const pokeLikes = document.createElement('h4')
		const likeCount = document.createElement('h5')
		const likeBtn = document.createElement('button')
		const deleteBtn = document.createElement('button')


		//define attributes; STILL not on DOM
		pokeCard.id = pokemon.id
		pokeCard.className = "poke-card"

		pokeImg.src = pokemon.img
		pokeImg.alt = `${pokemon.name} image`

		pokeName.textContent = pokemon.name
		pokeLikes.textContent = "likes: "
		likeCount.textContent = pokemon.likes

		likeBtn.className = "like-bttn"
		likeBtn.textContent = "Like"
		likeBtn.addEventListener('click', ()=>{
			increaseLike(pokemon, likeCount)
		})

		deleteBtn.className = "delete-bttn"
		deleteBtn.textContent = "Delete"
		deleteBtn.addEventListener('click', () => deletePoke(pokeCard))

		//add to pokecard
		pokeCard.append(pokeImg, pokeName,likeCount, likeBtn, deleteBtn)

		//add to poke container, which IS on the DOM
		pokeContainer.append(pokeCard)


		// const pokeCard = document.createElement("div");
		// const pokeImg = document.createElement("img");
		// const pokeName = document.createElement("h3");
		// const pokeLikes = document.createElement("h3");
		// const likesNum = document.createElement("h5");
		// const likeBttn = document.createElement("button");
		// const deleteBttn = document.createElement("button");

		// pokeCard.id = `poke-${pokemon.id}`;
		// pokeCard.className = "poke-card";
		
		// pokeImg.src = pokemon.img;
		// pokeImg.alt = `${pokemon.name} image`;

		// pokeName.textContent = pokemon.name;
		
		// pokeLikes.textContent = "Likes: ";
		
		// likesNum.className = "like-num";
		// likesNum.textContent = pokemon.likes;
		
		// likeBttn.className = "like-bttn";
		// likeBttn.textContent = "♥";
		// likeBttn.addEventListener("click", () => increaseLike(pokemon, likesNum));

		// deleteBttn.className = "delete-bttn";
		// deleteBttn.textContent = "Delete";
		// deleteBttn.addEventListener("click", () => deletePoke(pokeCard));

		// pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
		// pokeContainer.appendChild(pokeCard);
	}

	function loadPokemons() {
		//make request to get pokemon
		fetch('http://localhost:3000/pokemons')
		.then((resp)=>resp.json())
		.then((data) => data.forEach((e) => renderPokemon(e)))


		// fetch(BASE_URL + '/pokemons')
		// .then(resp => resp.json())
		// .then(pokemons => {
		// 	pokemons.forEach(renderPokemon);  
		// });
	}

	function increaseLike(pokemon, likesElement) {
		++pokemon.likes; // or "pokemon = pokemon.likes + 1" or "pokemon+1"
		likesElement.textContent = pokemon.likes;
		//now need to make a patch request to update JSON
		fetch(`http://localhost:3000/pokemons/${pokemon.id}`, { //MUST INCLUDE THE ID to know which pokemon to update; use template literal
			method: 'PATCH',
			headers: {
				"Content-Type": "application/JSON"
			},
			body: JSON.stringify({
				likes: pokemon.likes
			}) //what we are passing in MUST be an object
		})
		.then ((resp)=> resp.json())
		.then (data => console.log(data)) //usually has console.log at end to show what you've added --- the above will update the DOM
	}

	function deletePoke(pokeCard) {
		// console.log(pokeCard)
		pokeCard.remove();

		//now remove from JSON

		deleteItem(pokeCard)

	}

// 🚧 Break Out Activity 1: GET Requests with json-server

	// 🚨 Comment out any conflicting code above before proceeding.

	// 1️⃣ Create a function (loadCommends) that:

		//  ✔️ Initiates a fetch request to GET all "comments" (/comments)

		//  ✔️ Parses the response into JSON

		//  ✔️ Logs the returned "comments" to the Browser console 

		function loadComments() {
			// ❗ your code here
		}

		// ✅ Check Answer: 
        // loadComments();

	// 2️⃣ Create a function (renderComment) that:

		//  ✔️ Accepts a single "comment" object

        //  ✔️ Creates a "div" (commentCard) and assigns it the Class name "comment-card"

		//  ✔️ Creates an "h3" (userName) and sets its text content as the Comment object's "name"

		//  ✔️ Creates a "p" (userName) and sets its text cotent as the Comment object's "content"

        //  ✔️ Appends userName and userContent to commentCard

		//  ✔️ Appends commentCard to commentsContainer

		function renderComment(comment) {
			// ❗ your code here
		}

		// ✅ Check Answer: 
		//  ❗ Edit loadComments() above to invoke renderComment for each returned Comment object
        // loadComments();

// 🚧 Break Out Activity 2: POST Requests with json-server

	// 🚨 Comment out any conflicting code above before proceeding.

	// 1️⃣ Create a function (createComment) that:

		//  ✔️ Captures and assigns the values of input#user (commentUser) and input#content (commentContent)

		//  ✔️ Creates a new Comment object with the following fields:

			// id => ❗ must be unique for each new Comment

			// user => commentUser (see above)

			// content => commentContent (see above)

		//  ✔️ Initiates a fetch request to POST a new "comment" (/comments)

			// ❗ Remember to specify 'method', 'headers', and 'body' in your POST request

		//  ✔️ Parses the fetch response into JSON

		//  ✔️ Logs "Success!" to the Browser console

		//  ✔️ Resets the input values of commentsForm

	function createComment() {
		// ❗ your code here
	}

	// ✅ Check Answer: 
	function init() {
		loadPokemons();
		// loadComments();
		// commentsForm.addEventListener("submit", createComment);
	}

	init();