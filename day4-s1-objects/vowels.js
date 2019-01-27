const str = 'hEllo world'
// count vowels - number 
// aeiou
function countVowels(str) {
    let count = 0 
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count += 1 // count++ 
        }
    }
    return count
}

const result = countVowels(str) // 3
console.log(result)

const name = 'aniruddha'
function countTimes(str) {
    const vowels = {
        a: 0, e: 0, i: 0, o: 0, u: 0
    }

    for(let i = 0; i < str.length; i++){
        if(vowels.hasOwnProperty(str[i])) {
            vowels[str[i]] += 1
        }
    }
    return vowels
}

const result1 = countTimes(name)
console.log(result1)

// countTimes(name) 
// { a: 2, e: 0, i: 1, o:0, u: 1}

// count number of times each vowel appearing 