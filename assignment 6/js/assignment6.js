/* Jimin Seo 145803169 jseo22@myseneca.ca */

// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1

window.onload = function () {
    makeRequest(1);
}

function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	//
	// "https://reqres.in/api/users?page=1" // for page 1
	// "https://reqres.in/api/users?page=2" // for page 2
	// etc...
	
    var url;

    if (pageNum == 1)
        url = "https://reqres.in/api/users?page=1";
    else if (pageNum == 2)
        url = "https://reqres.in/api/users?page=2";
    else if (pageNum == 3)
        url = "https://reqres.in/api/users?page=3";
    else
        url = "https://reqres.in/api/users?page=4";

	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsonData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			
			var table = document.getElementById("data");
			table.innerHTML = "";

			for (var i = 0; i < jsonData.data.length; i++) {
			    var tRow = document.createElement("tr");
			    var data1 = document.createElement("td");
			    var data2 = document.createElement("td");
			    var data3 = document.createElement("td");
			    var data4 = document.createElement("td");
			    var image = document.createElement("img");

			    var text = document.createTextNode(jsonData.data[i].id);
			    var fname = document.createTextNode(jsonData.data[i].first_name);
			    var Lname = document.createTextNode(jsonData.data[i].last_name);
			    image.setAttribute("src", jsonData.data[i].avatar);
			    image.setAttribute("alt", jsonData.data[i].first_name);

			    data1.appendChild(text);
			    tRow.appendChild(data1);

			    data2.appendChild(fname);
			    tRow.appendChild(data2);

			    data3.appendChild(Lname);
			    tRow.appendChild(data3); 

			    data4.appendChild(image);
			    tRow.appendChild(data4);

			    table.appendChild(tRow);
			}


			
			// TODO: remove the class "active" from all elements with the class "pgbtn"

			// TODO: add the class "active" to the button corresponding to the active page, ie:
			//
			// if jsData.page is 1, add the class "active" to button element with id pgbtn1
			// if jsData.page is 2, add the class "active" to button element with id pgbtn2
			// etc...
			
			if (jsData.page == 1)
			    document.getElementById("pgbtn1").classList.add("active");
			else
			    document.getElementById("pgbtn1").classList.remove("active");
			if (jsData.page == 2)
			    document.getElementById("pgbtn2").classList.add("active");
			else
			    document.getElementById("pgbtn2").classList.remove("active");
			if (jsData.page == 3)
			    document.getElementById("pgbtn3").classList.add("active");
			else
			    document.getElementById("pgbtn3").classList.remove("active");
			if (jsData.page == 4)
			    document.getElementById("pgbtn4").classList.add("active");
			else
			    document.getElementById("pgbtn4").classList.remove("active");

		} else {
			console.log('There was a problem with the request.');
		}
	}
}	