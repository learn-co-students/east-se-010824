// ✅ Request-Response Cycle

	// request => url + http verb
    // response => status code + message body

// ✅ HTTP Verbs

    // CRUD => POST, GET, PATCH, DELETE

// ✅ CRUD with Fetch: GET Requests

	// fetch('http://localhost:3000/pokemons') // returns a promise
    
    // // // // once first Promise is resolved...
    // 	.then(resp => resp.json()) // ...convert the response into JSON and return another promise
    
    // // // // once second Promise is resolved...
	// 	.then(pokemonArry => {

	// 		// ...console.log the JS response
	// 		console.log(pokemonArry)
	// 	});

// ✅ CRUD with Fetch: POST Requests
       
	// let comment = { user: "Emiley" };
	// const secondArg = {
	// 	// ❗ specify method
	// 	method: 'POST',
		
	// 	// ❗ specify headers
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 		// 'Accept': "application/json"
	// 	},

	// 	// ❗ convert the item into a JSON string, necessary for compatibility with db.json 
	// 	body: JSON.stringify(comment),
	// }

	// fetch('http:localhost:3000/comments', secondArg)
	// 	.then(resp => resp.json())
	// 	.then(data => console.log(data));

// ✅ CRUD with Fetch: PATCH Requests

	// function updateItem(item) {
	// 	const item = { user: "Apollo" }
	// 	const id = 2
	// // // 	// ❗ make sure to include identifier (id) in request URL
	// 	fetch(`http://localhost:3000/comments/${id}`, {
			
	// 		// ❗ specify method
	// 		method: 'PATCH',

	// 		// ❗ specify headers
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},

	// 		// ❗ convert the item into a JSON string
	// 		body: JSON.stringify(item)
	// 	})
	// 	.then(resp => resp.json())

	// 	// ❗ should return the updated JS object
	// 	.then(newComment => console.log(newComment));
	// // }

// ✅ CRUD with Fetch: DELETE Requests

	// function deleteItem(commentId) {

	// 	fetch(`http:localhost:3000/comments/${commentId}`, {
	// 		// ❗ specify method
	// 		method: 'DELETE',
			
	// 		// // ❗ specify headers
	// 		// headers: {
	// 		// 	'Content-Type': 'application/json',
	// 		// }
	// 	})
	// 	.then(resp => resp.json())

	// 	// ❗ should return an empty JS object
	// 	.then(item => console.log(item));
	// }

	// deleteItem(1)

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activities ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

	// ❗ Use these constants / functions in your solutions
	const BASE_URL = 'http://localhost:3000';
	const pokeContainer = document.getElementById('poke-container');
	const commentsContainer = document.getElementById('comments-container');
	const commentsForm = document.getElementById('comments-form');

	function increaseLike(pokemon, likesElement) {
		console.log(pokemon, likesElement)
		// pokemon.likes = pokemon.likes + 1
		// optimistic rendering
		
		fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				likes: pokemon.likes
			})
		}).then((resp) => resp.json())
		.then((data) => {
			console.log(data) 
			// pessimistic rendering
			pokemon.likes++
			likesElement.textContent = pokemon.likes
		})
	}

	function deletePoke(pokeCard) {
		pokeCard.remove()

		fetch(`http://localhost:3000/pokemons/${pokeCard.id}`, {
			method: "DELETE"
		})
	}
	
	function renderPokemon(pokemon) {
		console.log(pokemon)
		// create div card
		const pokeCard = document.createElement('div')
		// create img
		const pokeImg = document.createElement('img')
		// create h3 poke name
		const pokeName = document.createElement('h3')
		// create h4 "likes: "
		const pokeLikes = document.createElement('h4')
		// create h5 likes num
		const likeCount = document.createElement('h5')
		// create likes button
		const likeButton = document.createElement('button')
		// create delete button
		const deleteButton = document.createElement('button')

		// pokecard pokemon id attribute
		// classname poke-card
		pokeCard.id = pokemon.id
		pokeCard.className = "poke-card"

		pokeImg.src = pokemon.img 
		pokeImg.alt = `${pokemon.name} image`

		pokeName.textContent = pokemon.name
		pokeLikes.textContent = "likes: "
		likeCount.textContent = pokemon.likes

		likeButton.classList = "like-bttn"
		likeButton.textContent = "Like"
		likeButton.addEventListener('click',() => increaseLike( pokemon, likeCount ) )

		deleteButton.className = "delete-bttn"
		deleteButton.textContent = "Delete"
		deleteButton.addEventListener('click', () => deletePoke(pokeCard))

		// add elements to card
		// add card to DOM
		pokeCard.append(pokeImg, pokeName, pokeLikes, likeCount, likeButton, deleteButton)
		pokeContainer.append(pokeCard)
	}

	function loadPokemons() {
		// make request to get all the pokemon
		fetch("http://localhost:3000/pokemons")
			.then((response) => response.json())
			.then((pokemonArry) => pokemonArry.forEach((onePokemon) => renderPokemon(onePokemon)))
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