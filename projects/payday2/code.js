let hints = {
    gas: '',
    wires: '',
    pressure: '',
}
const reactors = [
{
    number: 1,
    gas: 'nitrogen',
    wires: 1,
    pressure: 58,
},
{
    number: 2,
    gas: 'detranium',
    wires: 1,
    pressure: 57,
},
{
    number: 3,
    gas: 'helium',
    wires: 2,
    pressure: 58,
},
{
    number: 4,
    gas: 'nitrogen',
    wires: 2,
    pressure: 58,
},
{
    number: 5,
    gas: 'detranium',
    wires: 2,
    pressure: 58,
},
{
    number: 6,
    gas: 'helium',
    wires: 2,
    pressure: 57,
},
{
    number: 7,
    gas: 'helium',
    wires: 3,
    pressure: 58,
},
{
    number: 8,
    gas: 'nitrogen',
    wires: 3,
    pressure: 58,
},
{
    number: 9,
    gas: 'detranium',
    wires: 3,
    pressure: 58,
},
{
    number: 10,
    gas: 'helium',
    wires: 3,
    pressure: 57,
},
{
    number: 11,
    gas: 'nitrogen',
    wires: 3,
    pressure: 57,
},
{
    number: 12,
    gas: 'detranium',
    wires: 3,
    pressure: 57,
},
]

function find(arr, prop) {
    let res = []
    let copy = [...arr]
    for(let reactor of copy){
        if(reactor[prop] == hints[prop]) {
            res.push(reactor)
        }  
    }
    return res
}

function filter() {
    let resultat = document.querySelector('.result')

    let newArr = [...reactors]

    let arrRes = []

    if(hints.gas !== ''){
        newArr = find(newArr, 'gas')
    }
    if(hints.wires !== ''){
        newArr = find(newArr, 'wires')
    }
    if(hints.pressure !== ''){
        newArr = find(newArr, 'pressure')
    }

    for(const react of newArr){
        arrRes.push(react.number)
    }
    resultat.innerHTML = `${arrRes}`
}

function button(putin ,trump) {
     hints[putin] = trump

     filter()
}

function reset() {
    hints['gas'] = ''
    hints['wires'] = ''
    hints['pressure'] = ''
    filter()
}