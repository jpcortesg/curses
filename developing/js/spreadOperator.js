const a = { b : 1} // Example of object

const b = a // Copie of object

b.c = 2 // modify copie object, alter object original

const c = { ...a } // Create copie of object without affecting the original

c.d = 12

console.log(a, b, c);