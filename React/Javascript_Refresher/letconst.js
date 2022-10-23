
// Lets do a quick refresher on var / let / const
    // Previous versions of JavaScript only had 'var'. This was simply a variable you set. Nothing fancy.

var myName = 'Jason';
console.log(myName)

// Later versions added 'let' and 'const' (vars is still available)
// You can't re-assign a constant variable. 'Let' variables are expected to change its value, but const (constant, duh) is expected to keep its value.

let letName ='First Jason'
console.log(letName)

letName = 'A new Jason'
console.log(letName)

// Notice in your console that you can change First Jason to A new Jason. Now, see what happens with const

const constName = 'Second Jason'
console.log(constName)

// constName = 'Second new Jason'
// console.log(constName)

// Running this, it will only print 'Second Jason', and throw up an error if you try to change it! 