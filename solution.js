/*
Write a function called do_allocation(number_of_people, number_of_buses)
The function should return a list of number of people who can get into the next bus that comes in based on the following logic:
Each bus’s capacity is the sum of the capacities of the previous two buses.
Once all the people get in, then the buses can continue, but will have 0 people inside it.
This is the case when the number of people are less and there are more buses. So after all the people are already boarded, then the remaining buses will have 0 people boarding.
The output of the function is an array/list with the same length as number_of_buses.
The total of this output array/list should be less than or equal to the number_of_people.
The first bus’ capacity can be set to 1 by default.

E.g.

Def  do_allocation(number_of_people, number_of_buses):
      …. Your code….
     Return array[number of people got into first bus, number of people got into second bus, …. , number of people who got into last bus]

Please submit the solution with properly written code with comments so that the reader can understand the logic. 
Bonus points for some who can make an HTML page which allows this input and displays the output */

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

// let num_of_people = prompt("number of people")
// console.log(num_of_people)


do_allocation(0, 5)