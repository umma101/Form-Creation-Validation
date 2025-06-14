// 1. This function will go and "fetch" (get) the user data from the website
async function fetchUserData() {
    // 2. This is the website (API) we are getting the user data from
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. This is the place on our page where we want to show the names
    const dataContainer = document.getElementById('api-data');

    // 4. Try to get the user data (this might take time)
    try {
        // "response" is like the waiter coming back from the kitchen
        const response = await fetch(apiUrl);

        // "users" is the actual food! We turn it into something we can read (JSON)
        const users = await response.json();

        // 5. Clear out the "Loading user data..." message
        dataContainer.innerHTML = '';

        // 6. Make a list to put all the names inside
        const userList = document.createElement('ul');

        // 7. Go through each user and add their name to the list
        users.forEach(user => {
            const listItem = document.createElement('li'); // Create one line
            listItem.textContent = user.name;              // Set name (like Leanne)
            userList.appendChild(listItem);                // Add to the list
        });

        // 8. Show the whole list on the page
        dataContainer.appendChild(userList);

    } catch (error) {
        // If something goes wrong (like no internet), show error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// 9. Wait for the HTML to finish loading, then run our function!
document.addEventListener('DOMContentLoaded', fetchUserData);
