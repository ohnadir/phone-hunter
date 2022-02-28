const searchPhone = () =>{
    const searchValue = document.getElementById('search-field').value;
    const url = (`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
    fetch(url)
    .then(response => response.json())
    .then(data => loadPhone(data.data.slice(0,20)));
}
const loadPhone = data =>{
    data.forEach(phone => {
        console.log(phone.phone_name)
    });
}