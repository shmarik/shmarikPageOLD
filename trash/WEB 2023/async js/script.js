const joke = document.querySelector(".joke")

async function jokeGen() {
    const res = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await res.json()
    console.log(data.value);
    joke.innerHTML = `${data.value}`
}
