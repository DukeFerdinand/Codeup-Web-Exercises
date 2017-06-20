(function(){
"use strict";


 /**
     * TODO:
     * Create person object, store it in a variable named person
     */
var person = {
	firstName: "Douglass",
	lastName: "Hooker",
	sayHello: function(){
		console.log("Hello from " + this.firstName + " " + this.lastName + "!")
	}

};

console.log(person.sayHello());
    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */

    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {
        	name: 'Cameron', 
        	amount: 180
        },
        {
        	name: 'Ryan', 
        	amount: 250
        },
        {
        	name: 'George', 
        	amount: 320
        }
    ];

    // function disountChecker() {
    // 	shoppers.forEach(function(shoppers){
    // 		shoppers.amount.forEach(function(amount){
    // 			if (amount >= 200) {
    // 				console.log("Thank you " + this.name + "." + "$" + amount * .10 + "is your new total because you have spent more than $200!")
    // 			} else {
    // 				console.log("Sorry, " + this.name + ". You did not spend more than $200")
    // 			}
    // 		})
    // 	})
    // }
    function discountChecker() {
    	shoppers.forEach(function(shoppers) {
    		console.log("Welcome, shopper: " + shoppers.name + "." + "Your subtotal is $" + shoppers.amount + ".");
    		if (shoppers.amount > 200){
    			console.log("Your final total after the discount is $" + (shoppers.amount - (shoppers.amount * .10)));
    		} else {
    			console.log("Sorry, " + shoppers.name + ". You did not qualify for the discount. Your total is $" + shoppers.amount + ".");
    		}
    	})
    }


    console.log(discountChecker());



// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books = [todo];
var books = [
	{
		title: "The Lord of the Rings",
		firstName: "J. R. R.",
		lastName: "Tolkein"
	},
	{
		title: "The Name of the Wind",
		firstName: "Patrick",
		lastName: "Rothfuss"
	},
	{
		title: "Dune",
		firstName: "Frank",
		lastName: "Herbert"
	},
	{
		title: "1984",
		firstName: "George",
		lastName: "Orwell"
	},
	{
		title: "A Connecticut Yankee in King Arthur's Court",
		firstName: "Mark",
		lastName: "Twain"
	}
]
// log out the books array
console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
for (var i = 0; i< books.length; ++i) {
    console.log("Book #" + (i + 1));
    console.log("Title: " + books[i].title);
    console.log("Author: " + books[i].firstName + " " + books[i].lastName);
    console.log("---");

}
// end loop here




























})();