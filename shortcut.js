// The following values are always falsy:

// 1. false
// 2. 0 (zero)
// 3. -0 (minus zero)
// 4. 0n (BigInt zero)
// 5. '', "", `` (empty string)
// 6. null
// 7. undefined
// 8. NaN


// Everything else is truthy. That includes:

// 1. '0' (a string containing a single zero)
// 2. 'false' (a string containing the text “false”)
// 3. [] (an empty array)
// 4. {} (an empty object)
// 5. function(){} (an “empty” function)


// Truthy And Falsy Value Check 

const number = "1"
console.log(!!number)