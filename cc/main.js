let palindrome = (str, occ) => {
    if (occ == 0 && str.trim().length == 0) {
        return false;
    }

    str = str.trim(); // noon
    let len = str.length; // 4

    // noon
    // n !== n
    if(str[0] !== str[len-1])
        return false;
    else if (len == 0 || len == 1)
        return true; 
    else
    return palindrome(str.slice(1, -1), 1);
}


// Leap year ES5

function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0)  year % 400 === 0){
      return true;
    } else return false;
}
//Leap year ES6

const leapYear = year =>  (year % 4 === 0 && year % 100 !== 0)  (year % 400 === 0)

console.log(leapYear(2000))

//ticket pricing
const ticketPrice = age => {
    (age <= 12 && age >= 1) ?
    console.log("Ticket price: $10")
    : (age > 12 && age <= 17) ?
    console.log("Ticket price: $15")
    : (age >= 18 && age < 100) ?
    console.log("Ticket price: $20")
    : console.log("Invalid age")
}

ticketPrice(120)
console.log(ticketPrice)
