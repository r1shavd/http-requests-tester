/*
script.js - HTTP Request Tester

Author : Rishav Das (https://github.com/rdofficial/)
Created on : July 27, 2021

Last modified by : Rishav Das (https://github.com/rdofficial/)
Last modified on : August 1, 2021

Changes made in the last modification :
1. Added the entire JS code for the functionality of the web application.
*/

const displayResponse = (response) => {
	/* This function serves the functionality of displaying any sort of text (response, output) at the output textarea html element at the web page. */

	// Getting the output HTML textarea for inserting the response
	let outputTextarea = document.querySelector('textarea[name="output"]');

	// Setting the response at the textarea for displaying the response to the user
	outputTextarea.value = response;
}

// Getting the send request button on the HTML page
const sendRequestBtn = document.getElementById('send-request-btn');

// Setting an on-click event listener to the sendRequestBtn
sendRequestBtn.addEventListener('click', (e) => {
	/* The function which is called when the user clicks on the sendRequestsBtn. This function reads all the user input on the form and then sends the HTTP request as per specified by the user. */

	// Preventing the default action
	e.preventDefault();

	// Getting the user inputs
	let url = document.querySelector('input[name="target-url"]').value;
	let data = document.querySelector('textarea[name="request-data"]').value;
	let type = document.querySelector('select[name="request-type"]').value;

	// Sending the HTTP request as per specified by the user
	if (type == 'get') {
		// If the HTTP request type specified by the user is GET, then we continue to send a GET request

		// Creating the data for the GET request
		data = JSON.parse(data);
		url += '?' + (new URLSearchParams(data)).toString();

		// Sending the GET request
		fetch(url).then(response => response.text()).then(response => {
			// Displaying the response to the output textarea
			displayResponse(response);
		}).catch(error => {
			// If there are any errors encountered in the process, then we display the error response to the user

			displayResponse(error);
		});
	} else if (type == 'post') {
		// If the HTTP request type specified by the user is POST, then we continue to send a POST request

		// Creating the data for the POST request
		data = JSON.parse(data);
		data = JSON.stringify(data);

		// Sending the POST request
		fetc(url, {method : 'POST', data : data}).then(response => response.text()).then(response => {
			// Displaying the response to the output textarea
			displayResponse(response);
		}).catch(error => {
			// If there are any errors encountered in the process, then we display the error response to the user

			displayResponse(error);
		})
	}
});