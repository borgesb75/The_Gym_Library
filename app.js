// Function to perform the search based on the user's input
function search() {
    // Gets the HTML section where the search results will be displayed
    let section = document.getElementById("search-results");

    // Gets the value of the search field and checks if it's empty
    let searchField = document.getElementById("search-field").value;

    // If the search field is empty, displays a message
    if (!searchField) {
        section.innerHTML = `
        <div class="result-item">
            <p>Search field is empty</p>
        </div>`;
        return; // Ends the function if no input
    }

    // Converts the search term to lowercase to avoid case-sensitive errors
    searchField = searchField.toLowerCase();

    // Initialize an empty string to store the results
    let results = "";

    // Iterate through the exercises and check if the search term matches any field
    for (let exercise of exercises) {
        // Check if the search term appears in the name in English, Portuguese, or muscle groups
        if (exercise.nameEnglish.toLowerCase().includes(searchField) || 
            exercise.namePortuguese.toLowerCase().includes(searchField) || 
            exercise.muscleGroups.toLowerCase().includes(searchField) || 
            exercise.executionMode.toLowerCase().includes(searchField)) {

            // Add the found exercise to the 'results' variable
            results += `
            <div class="result-item">
                <h2 class="meta-description">
                    ${exercise.nameEnglish} (${exercise.namePortuguese})
                </h2>
                <div class="meta-description">
                    <p><span class="highlighted-title">Execution method:</span> ${exercise.executionMode}</p>
                    <p><span class="highlighted-title">Muscle groups:</span> ${exercise.muscleGroups}</p>
                    <p><span class="highlighted-title">Exercise variations:</span> ${exercise.variations}</p>
                </div>
                <a href=${exercise.link} target="_blank">Explanatory video</a>
            </div>`;
        }
    }

    // If no results are found, display a default message
    if (!results) {
        results = `
        <div class="result-item">
            <p>Nothing was found. Try:</p>
            <ul>
                <li>Using synonyms or related exercise terms.</li>
                <li>Typing part of the name, like "squat" for "squat exercise".</li>
                <li>Searching by muscle group, like "chest" or "back".</li>
            </ul>
        </div>`;
    };

    // Insert the results into the HTML section
    section.innerHTML = results;
}

function showAllExercises() {
    // Gets the section element where the search results will be displayed
    let section = document.getElementById("search-results");
    section.innerHTML = ""; // Clears the content before adding new results
    let results = ""; // Initializes an empty string to store the results

    // Iterates through each exercise object to generate the HTML content
    for (let exercise of exercises) {
        // Adds the exercise information to the 'results' string
        results += `
        <div class="result-item">
            <h2 class="meta-description">
                ${exercise.nameEnglish} (${exercise.namePortuguese})
            </h2>
            <div class="meta-description">
                <p><span class="highlighted-title">Execution method:</span> ${exercise.executionMode}</p>
                <p><span class="highlighted-title">Muscle groups:</span> ${exercise.muscleGroups}</p>
                <p><span class="highlighted-title">Exercise variations:</span> ${exercise.variations}</p>
            </div>
            <a href="${exercise.link}" target="_blank">Explanatory video</a>
        </div>`;
    }

    // Inserts the generated HTML content into the 'search-results' section
    section.innerHTML = results;
}


// Listener to trigger the search when the 'Enter' key is pressed
document.getElementById("search-field").addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        search(); // Calls the search function
    }
});