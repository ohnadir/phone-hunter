const spinner = type =>{
    document.getElementById('spinner').style.visibility = type;
}
const searchPhone = () =>{
    const searchValue = document.getElementById('search-field').value;
    spinner('visible');
    document.getElementById('search-field').value='';
    if(searchValue == ''){
        return;
    } else if(searchValue.toLowerCase()){
        const url = (`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
        fetch(url)
        .then(response => response.json())
        .then(data => displayPhone(data.data.slice(0,20))); //
    }
        
}
/* display phone */
const displayPhone = data =>{
    // console.log(data)
    if(data[0] == undefined){
        document.getElementById('error').innerText = 'No Device Found';
    }
    else{
        const phoneListContainer = document.getElementById('phone-list-container');
        phoneListContainer.textContent = '';
        document.getElementById('phone-details-container').textContent = '';
        data.forEach(phone => {
            const div = document.createElement('div');
            div.classList.add('col', 'mb-4');
            div.innerHTML = `
                <div class="card h-100 text-center">
                    <img src="${phone.image}" class="card-img-top w-50 mx-auto mt-3">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">${phone.brand}</p>
                        <button onclick="getPhoneDetails('${phone.slug}')" class="btn btn-primary">Explore Phone</button>
                    </div>
                </div>
        `
        phoneListContainer.appendChild(div);
        spinner('hidden');
    });
    }
}

/* display phone details */
const getPhoneDetails = phoneId =>{
    const url = (`https://openapi.programming-hero.com/api/phone/${phoneId}`)
    spinner('visible');
    fetch(url)
    .then(response => response.json())
    .then(data => displayPhoneDetails(data.data))
    // console.log(phone)
}

/* display Phone Details */
const displayPhoneDetails = phone =>{
    console.log(phone)
    const phoneDetailsContainer = document.getElementById('phone-details-container');
    phoneDetailsContainer.textContent= '';
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card text-center w-75 mx-auto mb-4">
            <img src="${phone.image}" class="card-img-top w-50 mx-auto mt-3">
            <div class="card-body">
                <h5 class="card-title">${phone.name}</h5>
                <span class="bolder">Release Date :- </span>
                <span id="reError">${phone.releaseDate}</span> <br><br>
                <span class="bolder">Main Features :-</span>
                <span>${phone.mainFeatures.chipSet}</span>,
                <span>${phone.mainFeatures.displaySize}</span>,
                <span>${phone.mainFeatures.memory}</span>,
                <span>${phone.mainFeatures.storage}</span> <br><br>
                <span class="bolder">Sensors :-</span>
                <span>${phone.mainFeatures.sensors[0]}</span>,
                <span>${phone.mainFeatures.sensors[1]}</span>,
                <span>${phone.mainFeatures.sensors[2]}</span>,
                <span>${phone.mainFeatures.sensors[3]}</span>,
                <span>${phone.mainFeatures.sensors[4]}</span>,
                <span>${phone.mainFeatures.sensors[5]}</span>
                
            </div>
        </div>
    `
    phoneDetailsContainer.appendChild(div);
    spinner('hidden');
}