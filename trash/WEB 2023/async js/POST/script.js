const objectData = {
    id: 3,
    name: prompt("name"),
    email: prompt("email")
    }

async function naafme() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(objectData)
        })
    const data = await res.json()
    alert(data.name);
    } catch (error) {
        console.error(error)
    } 
}

naafme()