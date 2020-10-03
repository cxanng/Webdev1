document.addEventListener('userDataReady', (event) => {
    const content = JSON.parse(event.detail.jsonText);
    
    for (let object of content) {
        const clone = document.getElementById('user-card-template').content.cloneNode(true);
        clone.querySelector('img').setAttribute('src', object.avatar);
        clone.querySelector('img').setAttribute('alt', object.firstName + ' ' + object.lastName);
        clone.querySelector('h1').innerText = object.firstName + ' ' + object.lastName;
        clone.querySelectorAll('p')[0].innerText = object.email;
        clone.querySelectorAll('p > span')[0].innerText = object.phoneNumber;
        clone.querySelectorAll('div > div > p')[0].innerText = object.address.streetAddress;
        clone.querySelectorAll('div > div > p')[1].innerText = object.address.zipCode + ' ' + object.address.city;
        clone.querySelectorAll('div > div > p')[2].innerText = object.address.country;
        clone.querySelectorAll('a')[0].setAttribute('href', object.homepage);
        clone.querySelectorAll('a')[0].innerText = object.homepage;
        document.getElementById('contacts').appendChild(clone);
    }
});
fetchUserData();