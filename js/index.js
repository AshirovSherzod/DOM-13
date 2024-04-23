const API_URL = "https://dummyjson.com/users"

const cards = document.querySelector(".cards")
const card = document.querySelector(".card")

async function getAPI(url) {
    let data = await fetch(url, {
        method: "GET"
    })

    data.json()
        .then(res => mapCards(res))
        .catch(err => console.log(err))
}
getAPI(API_URL)

function mapCards(data) {
    let newCard = ""
    data.users.forEach(e => {
        newCard += `
        <div class="card">
            <div class="card__img">
                <img src="${e.image}" alt="">
            </div>
            <div class="card__desc">
                <h1 class="line__clamp">${e.firstName} ${e.lastName}</h1>
                <p>Age: ${e.age}</p>
                <p >Address: ${e.address.city}</p>
                <p>Email: ${e.email}</p>
                <p class="line__clamp">Phone number: ${e.phone}</p>
                <p class="line__clamp">University: ${e.university}</p>

            </div>
        </div>
    `
    });
    cards.innerHTML = newCard
}