const searchPhone = () =>{
    const searchValue = document.getElementById('search-field').value;
    const url = (`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
    fetch(url)
    .then(response => response.json())
    .then(data => loadPhone(data.data.slice(0,20)));
}
const loadPhone = data =>{
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
                </div>
            </div>
        `
        phoneListContainer.appendChild(div);
        console.log(phone)
    });
}