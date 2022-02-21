//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names) {
    result = ['']
    len = (names.length)
    while (len--) {
        if (string.indexOf(names[len]) != -1) {
            if (result.length === 0) {
                return 'No Matches'
            }
        }
        if (len == 0) {
            result += `Matched ${names[0]} `
        }
        else {
            result += `Matched ${names[len]} | `
        }
    }
    return result
}

console.log(findWords(dog_string, dog_names))

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    sum = 1
    while (sum <= arr.length) {
        if ((sum % 2) !== 0) {
            arr.splice(sum - 1, 1, 'even index')
            sum += 2
        }
        else {
            sum += 1
        }
    }
    return arr
}

console.log(replaceEvens(["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]