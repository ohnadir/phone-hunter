const searchPhone = () =>{
    const searchValue = document.getElementById('search-field').value;
    const url = (`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
    fetch(url)
    .then(response => response.json())
    .then(data => displayPhone(data.data.slice(0,20)));
}
/* display phone */
const displayPhone = data =>{
    const phoneListContainer = document.getElementById('phone-list-container');
    phoneListContainer.textContent = '';
    data.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col', 'mb-4');
        div.innerHTML = `
            <div class="card h-100 text-center">
                <img src="${phone.image}" class="card-img-top w-50 mx-auto mt-3">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text"> Card Details</p>
                    <button onclick="getPhoneDetails('${phone.slug}')" class="btn btn-primary">Explore Phone</button>
                </div>
            </div>
        `
        phoneListContainer.appendChild(div);
        // console.log(phone)
    });
}

/* display phone details */
const getPhoneDetails = phoneId =>{
    const url = (`https://openapi.programming-hero.com/api/phone/${phoneId}`)
    fetch(url)
    .then(response => response.json())
    .then(data => displayPhoneDetails(data.data))
    // console.log(phone)
}

/* display Phone Details */
const displayPhoneDetails = phone =>{
    const phoneDetailsContainer = document.getElementById('phone-details-container');
    phoneDetailsContainer.textContent= '';
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card text-center w-75 mx-auto mb-4">
            <img src="${phone.image}" class="card-img-top w-50 mx-auto mt-3">
            <div class="card-body">
                <h5 class="card-title">${phone.name}</h5>
                <p class="card-text">${phone.brand}</p>
            </div>
        </div>
    `
    phoneDetailsContainer.appendChild(div);
    console.log(phone);
    // console.log(phone.mainFeatures.displaySize);
}