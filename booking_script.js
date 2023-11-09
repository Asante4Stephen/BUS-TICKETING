 // Sample bus data
 const buses = [
    {
        name: 'Bus A',
        company: 'Company A',
        location: 'Location A',
        seats: [
            { number: 1, isBooked: false },
            { number: 2, isBooked: false },
            // ... more seats ...
        ],
    },

    
    // ... more buses ...
];

function searchBuses() {
    // Perform your search logic here
    // For simplicity, this example assumes that all buses match the search criteria

    const searchResults = document.getElementById('bus-search-results');
    searchResults.innerHTML = '';

    buses.forEach((bus) => {
        const busElement = document.createElement('div');
        busElement.innerHTML = `
            <h2>${bus.name}</h2>
            <p>Company: ${bus.company}</p>
            <p>Location: ${bus.location}</p>
            <button onclick="selectBus('${bus.name}')">Select Bus</button>
        `;
        searchResults.appendChild(busElement);
    });
}

// function searchBus() {
//     // ... perform your search logic here ...

//     // Assuming 'results' is the data returned from your search function
//     const results = ['Result 1', 'Result 2', 'Result 3'];

//     // Update the 'results' div with the search results
//     const resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = '';
//     results.forEach((result) => {
//         const resultElement = document.createElement('p');
//         resultElement.textContent = result;
//         resultsDiv.appendChild(resultElement);
//     });

//     // Show the results
//     document.querySelector('.container').classList.add('active');

function selectBus(busName) {
    // Find the selected bus in the buses array
    const selectedBus = buses.find((bus) => bus.name === busName);

    if (!selectedBus) {
        alert('Error: Bus not found');
        return;
    }

    // Display the seat layout for the selected bus
    const seatSelection = document.getElementById('seat-selection');
    seatSelection.innerHTML = '';

    selectedBus.seats.forEach((seat) => {
        const seatElement = document.createElement('div');
        seatElement.className = seat.isBooked ? 'seat-booked' : 'seat-available';
        seatElement.innerHTML = `<p>Seat ${seat.number}</p>`;
        seatSelection.appendChild(seatElement);
    });
}