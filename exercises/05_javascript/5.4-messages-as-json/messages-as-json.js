document.addEventListener('userDataReady', (event) => {
    // Parse the json text to an object. Now content is an array contains objects
    const content = JSON.parse(event.detail.jsonText);
    
    // Loop through objects in the array
    for (let object of content) {
        // Clone the template
        const clone = document.getElementById('user-card-template').content.cloneNode(true);
        
        // Modify the source and alternative text of the image
        clone.querySelector('img').setAttribute('src', object.avatar);
        clone.querySelector('img').setAttribute('alt', object.firstName + ' ' + object.lastName);
        
        // Modify H1
        clone.querySelector('h1').innerText = object.firstName + ' ' + object.lastName;
        
        // Modify contents
        clone.querySelector('p.email').innerText = object.email;
        clone.querySelector('p.phone > span').innerText = object.phoneNumber;
        clone.querySelectorAll('div.address > p')[0].innerText = object.address.streetAddress;
        clone.querySelectorAll('div.address > p')[1].innerText = object.address.zipCode + ' ' + object.address.city;
        clone.querySelectorAll('div.address > p')[2].innerText = object.address.country;
        clone.querySelector('p.homepage > a').setAttribute('href', object.homepage);
        clone.querySelector('p.homepage > a').innerText = object.homepage;

        // Append the clone node to the contacts div
        document.getElementById('contacts').appendChild(clone);
    }
});
fetchUserData();