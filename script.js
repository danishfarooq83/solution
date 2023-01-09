const form = document.getElementById('my-form')
const people = document.getElementById('people')
const buses = document.getElementById('buses')

function do_allocation(num_of_people, num_of_buses) {
    // Default capacity for current bus
    let currCapacity = preCapacity = 1;
    let temp;

    let numOfPeople = num_of_people;
    let numPeoplePerBus = []
    for (let i = 0; i < num_of_buses; i++) {
        if (numOfPeople > 0) {
            let diff = numOfPeople - currCapacity;
            // if num of people remaining are less than current capacity then push all remaining people directly into bus
            if (diff >= 0) {
                // reduce current capacity of bus from remaining people waiting
                numOfPeople -= currCapacity;
                numPeoplePerBus.push(currCapacity);
            } else {
                numPeoplePerBus.push(numOfPeople);
                numOfPeople -= numOfPeople;
            }

        } else {
            // if capcaity of all buses are greater than num of people. in that case some buses will have zero passangers 
            numPeoplePerBus.push(0)
        }


        /* incremental increase in capacity of a bus after every iteration currCapacity variable will be equal to sum of previous plus current and 
        prevCapacity will be equal to  current capacity */
        temp = currCapacity
        currCapacity += preCapacity;
        preCapacity = temp;
    }

    // console.log(numPeoplePerBus)
    // console.log(numPeoplePerBus.reduce((sum, curr) => sum += curr, 0))
    return numPeoplePerBus
}


function createTableData(arg) {
    const tableBody = document.getElementById('table-body')

    // to clear old list
    tableBody.innerHTML = ''

    arg.forEach((numPeople, index) => {
        const tableRow = document.createElement('tr')
        tableRow.innerHTML = `
                <td>Bus number ${index + 1}</td>
                <td class="tc">number of people ${numPeople}</td>
        `
        tableBody.appendChild(tableRow)
    });

}

form.addEventListener('submit', e => {
    e.preventDefault();
    const res = do_allocation(people.value, buses.value)

    console.log(res)
    createTableData(res)
})