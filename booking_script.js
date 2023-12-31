
// JavaScript code for fetching bus data and handling user interactions
function searchBuses() {
    // Fetch available buses based on user input
    const fullname = document.getElementById('fullName').value;
    const companies = document.getElementById('companies').value;
    const location = document.getElementById('location').value;
    const passenger = document.getElementById('passenger').value;
    const depDate = document.getElementById('depDate').value;
    const depTime = document.getElementById('depTime').value;
    console.log(location) 
    // Perform an API request to get bus data and display results
    // You'd typically connect to a server for this.
    window.location.href="busSearchResults.html"

    const formData = {
        fullname:fullname,
        companies:companies,
        location:location,
        passenger:passenger,
        depDate:depDate,
        depTime:depTime
    }
    
    

    
    localStorage.setItem("ticketFormData", JSON.stringify(formData))

    formData.fare = "GHS12.00"
    // Example: Display available buses
    const busSearchResults = document.getElementById('bus-search-results');

    busSearchResults.innerHTML = `<h2>Available Buses</h2>
        <ul>
            <li>Bus A - Price: $50 <button onclick="selectSeats('Bus A')">Select Seats</button></li>
            <li>Bus B - Price: $60 <button onclick="selectSeats('Bus B')">Select Seats</button></li>
            <li>Bus C - Price: $70 <button onclick="selectSeats('Bus C')">Select Seats</button></li>
        </ul>`;
        busSearchResults.style.display = 'block';;
        busSearchResults.style.margin = 'auto';
        busSearchResults.style.padding = 'auto';
        busSearchResults.style.border = '1px solid black';
        busSearchResults.style.background = 'white';
        busSearchResults.style.borderRadius = '10px';

        
            // <li>Bus A - Price: $50 <button onclick="selectSeats('Bus A')">Select Seats</button></li>
}

// Function to handle seat selection
function selectSeats(busName) {
    
    window.location.href="seatSelection.html"
    
    localStorage.getItem("ticketFormData", JSON.parse(formData))
    var ticketFormData = JSON.parse(localStorage.getItem("ticketFormData"));
    ticketFormData["selectedBus"]=busName;
    localStorage.setItem("ticketFormData", JSON.stringify(ticketFormData));

    // Show selected seats page
    
    // let selectedBus = busName;
    // let fare = 50;
    formData.busName = busSearchResults.busName;

    
    
    const seatSelection = document.getElementById('seat-selection');
    // seatSelection.innerHTML = `<h2>Seat Selection for </h2>
    //     <p>Select your seats:</p>
    //     <select id="selected-seats" multiple>
    //     <option value="1A">1A</option>
    //     <option value="1B">1B</option>
    //     <option value="2A">2A</option>
    //     <option value="2B">2B</option>
    //     <!-- Add more seat options -->
    //     </select>
    //     <button onclick="proceedToPayment('$}')" 
    //     style="color : black;
    //     border: groove black 2px
    //     " >Proceed to Payment</button>`;
    //     seatSelection.style.display = 'block';
    //     seatSelection.style.margin = 'auto';
    //     seatSelection.style.padding = 'auto';
    //     seatSelection.style.border = '1px solid black';

    //     seatSelection.style.background = 'white';
    //     seatSelection.style.borderRadius = '10px';

    // const busSearchResults = document.getElementById('bus-search-results');
    // busSearchResults.style.display = 'block';
    // busSearchResults.style.margin = 'auto';
    // busSearchResults.style.padding = '10px';
    // busSearchResults.style.border = '1px solid black';
    // busSearchResults.style.background = 'white';
    // busSearchResults.style.borderRadius = '10px';



    // const seatSelection = document.getElementById('seat-selection');
    // seatSelection.innerHTML = `<h2>Seat Selection for ${busName}</h2>
    // <p>Select your seats:</p>
    // <select id="selected-seats" multiple>
    // <option value="1A">1A</option>
    // <option value="1B">1B</option>
    // <option value="2A">2A</option>
    // <option value="2B">2B</option>
    // <!-- Add more seat options -->
    // </select>
    // <button onclick="proceedToPayment('${busName}')" 
    // style="color : black;
    // border: groove black 2px
    // " >Proceed to Payment</button>`;
    // seatSelection.style.display = 'block';
    // seatSelection.style.margin = 'auto';
    // seatSelection.style.padding = 'auto';
    // seatSelection.style.border = '1px solid black';
    // seatSelection.style.background = 'white';
    // seatSelection.style.borderRadius = '10px';
    
        // <p>Select your seats:</p>
        // <select id="selected-seats" multiple>
        //     <option value="1A">1A</option>
        //     <option value="1B">1B</option>
        //     <option value="2A">2A</option>
        //     <option value="2B">2B</option>
        //     <!-- Add more seat options -->
        // </select>

        // <button onclick="proceedToPayment('${busName}')">Proceed to Payment</button>`;

        
}

// Function to handle payment options
function proceedToPayment(busName) {
    
    window.location.href="paymentOptions.html"

    localStorage.getItem("ticketFormData", JSON.parse(formData))
    console.log(`Ticket Form Data: ${JSON.stringify(localStorage)}`);

    var formData = {
        name: name,
        phoneNumber: phoneNumber,
        emailAddress: emailAddress,
        busName: busName,
        selectedSeats: selectedSeats
      };
    // console.log(localStorage);

    // let formData = JSON.stringify({
    //     name: userName,
    //     email: userEmail,
    //     phoneNumber: userPhoneNum,
    //     busName: busName,
    //     selectedSeats: selectedSeats,
    //     totalPrice: totalPrice
    //   });
      
    localStorage.setItem("ticketFormData", formData);
    
    const paymentOptions = document.getElementById('payment-options');
    // paymentOptions.innerHTML = `<h2>Payment Options</h2>
    //     <p>Choose a payment method:</p>
    //     <select id="payment-method">
    //         <option value="credit-card">Credit Card</option>
    //         <option value="debit-card">Debit Card</option>
    //         <option value="wallet">Mobile Wallet</option>
    //         <option value="online-banking">Online Banking</option>
    //     </select>
    //     <button onclick="confirmBooking('${busName}')" style="color : black;
    //     border: groove black 2px
    //     "
    //     >Confirm Booking</button>`;
    //     paymentOptions.style.display = 'block';
    //     paymentOptions.style.margin = 'auto';
    //     paymentOptions.style.padding = 'auto';
    //     paymentOptions.style.border = '1px solid black';
    //     paymentOptions.style.background = 'white';
    //     paymentOptions.style.borderRadius = '10px';

    // const seatSelection = document.getElementById('seat-selection');
    // seatSelection.style.display = 'block';
    // seatSelection.style.margin = 'auto';
    // seatSelection.style.padding = 'auto';
    // seatSelection.style.border = '1px solid black';
    // seatSelection.style.background = 'white';
    // seatSelection.style.borderRadius = '10px';

   
}

// Function to confirm booking and display success message
        
        
        


// Function to confirm the booking
function confirmBooking(busName) {
    
    window.location.href="confirmationMessage.html"


    // You can implement actual payment processing here
    // Generate e-tickets and send booking confirmation

    // const confirmationMessage = document.getElementById('confirmation');
    // confirmationMessage.innerHTML = `<h2>Booking Confirmation</h2>
    //     <p>Your booking for ${busName} has been confirmed.</p>
    //     <p>An e-ticket has been sent to your email.</p>`;
    
    // document.body.appendChild(confirmationMessage);
        
}

// document.getElementById('saveButton').addEventListener('click', function() {
//     const fullname = document.getElementById('fullName').value;
//     const companies = document.getElementById('companies').value;
//     const location = document.getElementById('location').value;
//     const passenger = document.getElementById('passenger').value;
//     const depDate = document.getElementById('depDate').value;
//     const depTime = document.getElementById('depTime').value;

//     // Save values to local storage
//     localStorage.setItem('fullName', fullname);
//     localStorage.setItem('companies', companies);
//     localStorage.setItem('location', location);
//     localStorage.setItem('passenger', passenger);
//     localStorage.setItem('depDate', depDate);
//     localStorage.setItem('depTime', depTime);

//     // alert('Data saved to local storage.');
// });

document.getElementById('printButton')?.addEventListener('click', function() {
    // Retrieve values from local storage
    const storedFullName = localStorage.getItem('fullName');
    const storedCompanies = localStorage.getItem('companies');
    const storedLocation = localStorage.getItem('location');
    const storedPassenger = localStorage.getItem('passenger');
    const storedDepDate = localStorage.getItem('depDate');
    const storedDepTime = localStorage.getItem('depTime');

    // Print values
    console.log('Full Name:', storedFullName);
    console.log('Companies:', storedCompanies);
    console.log('Location:', storedLocation);
    console.log('Passenger:', storedPassenger);
    console.log('Departure Date:', storedDepDate);
    console.log('Departure Time:', storedDepTime);
});








