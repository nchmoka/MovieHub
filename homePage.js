// Assuming you have a JSON file named data.json
const jsonPath = '/data.json';
let moviesData = []
// Using fetch
fetch(jsonPath)
    .then(response => response.json())
    .then(data => {
        // Now 'data' contains the parsed JSON from the file
        console.log(data);
        // You can use the data as needed, for example, storing it in a variable
        moviesData = data;
        console.log(moviesData);
        const movieListElement = document.getElementById('movieList');
        movieListElement.classList.add("grid", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "xl:grid-cols-5", "gap-5", "p-5");
        movieListElement.innerHTML = ''; // Clear previous content
        // Loop through each movie object and add it to the list
        moviesData.forEach(movie => {
            const listItemElement = document.createElement('li');
            const imageItemElement = document.createElement('img');
            const movieTitleElement = document.createElement('span');
            const buttonElement = document.createElement('button');

            imageItemElement.src = movie.image;
            imageItemElement.classList.add("picture-img", "object-cover", "w-full-100", "h-70" ,"rounded-lg");
            movieTitleElement.textContent = movie.title;
            movieTitleElement.classList.add("picture-title","block" ,"text-2xl", "font-bold", "mb-2");
            buttonElement.textContent = 'View Details';
            buttonElement.classList.add("mt-4", "bg-gray-600", "text-white", "px-6" ,"py-3" ,"rounded-full");
            // Add onclick function for each button
            buttonElement.onclick = function () {
                renderMovieDetails(movie);
            };

            // Append elements to the list item
            listItemElement.appendChild(imageItemElement);
            listItemElement.appendChild(movieTitleElement);
            listItemElement.appendChild(buttonElement);

            movieListElement.appendChild(listItemElement);
            
        });
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });

    // Function to toggle dark mode
    function toggleDarkMode() {
        const body = document.body;
        const currentClass = body.classList.contains('dark');
        body.classList.toggle('dark', !currentClass); // Toggle 'dark' class based on its absence or presence
        const darkModeBtn = document.getElementById('darkModeBtn');
        if (darkModeBtn.classList.contains('bg-gray-800')) {
            darkModeBtn.classList.remove('bg-gray-800', 'text-white');
            darkModeBtn.classList.add('bg-white', 'text-gray-800');
            darkModeBtn.textContent = 'Light Mode';
        } else {
            darkModeBtn.classList.remove('bg-white', 'text-gray-800');
            darkModeBtn.classList.add('bg-gray-800', 'text-white');
            darkModeBtn.textContent = 'Dark Mode';
        }

    }

    // Function to render movie details dynamically
    function renderMovieDetails(movie) {
        const modalContent = `
            <h1 class="text-4xl font-bold mb-4">${movie.title}</h1>
            <div class="bg-gray-600 inline-block rounded-full px-4 py-2 mb-4">
                <span class="text-lg font-semibold">${movie.genre}</span>
            </div>
            <img src="${movie.image}" alt="${movie.title}" class="mb-2 rounded-lg" style="max-width: 200px;">
            <p class="text-gray-300 mt-4">Summary: ${movie.summary}</p>
            <div class="mt-4 border-t pt-4">
                <h2 class="text-2xl font-bold mb-2">Details</h2>
                <p class="text-gray-400">Director: ${movie.director}</p>
                <p class="text-gray-400">Year: ${movie.year}</p>
                <p class="text-gray-400">Genre: ${movie.genre}</p>
                <!-- Add more details as needed -->
            </div>
            <button onclick="addToWatchList()" class="mt-4 bg-gray-600 text-white px-6 py-3 rounded-full">Add to Watch List</button>
        `;

        document.getElementById('movieDetailsContent').innerHTML = modalContent;
        document.getElementById('movieDetailsModal').style.display = 'flex';
    }

    // Function to close the movie details modal
    function closeMovieDetailsModal() {
        document.getElementById('movieDetailsModal').style.display = 'none';
    }

    // Function to add to watch list
    function addToWatchList() {
        alert('Added to Watch List!');
        // You can implement your logic to add to the watch list here
    }

    