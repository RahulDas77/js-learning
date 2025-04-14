// Immediately Invoked Function Expression(IIFE)
// used for reducing global scope pollution

(function disco() { // named IIFE
    console.log(`DB CONNECTED`);
})();  // must put semi-colon to end the context

( (name) => {  //IIFE
    console.log(`DB CONNECTED 2 ${name}`);
} )("rahul");