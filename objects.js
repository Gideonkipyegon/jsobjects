let myBook = {
        tittle: "javascript",
        author: "james"
    }
    //printing title and author using square brackets
console.log(myBook['tittle'])
console.log(myBook['author'])

//adding new key value pair
// add release year property

myBook.year = 2023;

// add publisher property

myBook["publisher"] = "CodeWithNathan";

//changing data
myBook.author = 'jayden'

//deleting data
delete myBook.year;

//checking availability of property
console.log('tittle ' in myBook)


console.log(myBook)