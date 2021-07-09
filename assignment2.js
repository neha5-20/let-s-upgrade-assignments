//FIZZBUZZ
let i, a, b, c, n = 100
for (i = 1; i <= n; i++) {
    a = i
    b = i
    c = i
    
    while (a >= 15){
        a -= 15

    } 
    while (b >= 3){
        b -= 3

    } 
    while (c >= 5){
        c -= 5
    } 

    if (a == 0){
        console.log("FizzBuzz")

    } 
    else if (b == 0){
        console.log("Buzz")

    } 
    else if(c == 0){
        console.log("Fizz")

    } 
    else {
        console.log(i)
    }
}

// pallindrome

let s = "stats level of rotator increases"
let s1 = "", s2 = ""
for (t of s) {
    if (t != " ") {
        s2 = s2 + t
        s1 = t + s1
    }
    else {
        if (s1 == s2) console.log("pallindrome:" + " " + s1)
        s1 = ""
        s2 = ""
    }
    
}
