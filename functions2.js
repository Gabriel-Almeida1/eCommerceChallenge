let IDs = []
let names = []
let prices = []
let reviews = []
let contRegister = 0
let programStop = true

while (programStop) {
    let programStart = parseInt(prompt("Type 1 to stop or 2 to start: "))
    if(programStart === 1) { // stop the loop
        programStop = false
    } else if (programStart === 2) { // start the program
        let chooseFunction = parseInt(prompt("1-Register, 2-Search by ID, 3-Search by name, 4-Order by ID, 5-Show by review, 6-Update the price, 7-Delete the product: "))
        if(chooseFunction > 7 || chooseFunction < 1) { // check if it's choosing the right options
            console.log("You have not typed any of the options above, try again.")
        } else if(chooseFunction === 1) { // inserting elements to the arrays
            let CheckIfIDExist = false
            let insertID = parseInt(prompt("ID: "))
            for(let i = 0; i < IDs.length; i++) { // checking if the ID already exist
                    if(insertID === IDs[i]) {
                        console.log("This ID is already registered.")
                        CheckIfIDExist = true
                    } 
            } if(CheckIfIDExist === false) { // if ID is available, adding elements
                let insertName = prompt("Name: ")
                let insertPrice = parseFloat(prompt("Price: "))
                let insertReview = parseInt(prompt("Review from 1 - 5: "))
                register(insertID, insertName, insertPrice, insertReview)
            }
        } else if (chooseFunction === 2) { // searching the product by its ID
            let searchProductByID = parseInt(prompt("Type the product ID: "))
            searchByID(searchProductByID)
        } else if (chooseFunction === 3) { // searching the product by its name
            let searchProductByName = prompt("Type the product name: ")
            searchByName(searchProductByName)
        } else if (chooseFunction === 4) { // ordering the IDs array from lowest to highest
            let orderdedArray = showOrderedByID(IDs)
            console.log("ID array: ", orderdedArray)
        } else if (chooseFunction === 5) { // ordering the reviews array from lowest to highest
            let orderedByReview = showByReview(reviews)
            console.log("Reviews array: ", orderedByReview)
        } else if (chooseFunction === 6) { // updating a price from the prices array
            let IDtoUpdateThePrice = parseInt(prompt("Type the ID: "))
            let productNewPrice = parseFloat(prompt("Type the new price: "))
            updatePrice(IDtoUpdateThePrice, productNewPrice)
        } else if (chooseFunction === 7) {
            let IDtoDelete = parseInt(prompt("Insert the ID to delete the product: "))
            deleteProduct(IDtoDelete)
        }
    }
} 

console.log(IDs)
console.log(names)
console.log(prices)
console.log(reviews)

function register(ID, name, price, review) {
    IDs[contRegister] = ID
    names[contRegister] = name
    prices[contRegister] = price
    reviews[contRegister] = review
    contRegister += 1
}

function searchByID(id) {
    let checkFoundID = true
    for(let i = 0; i < IDs.length; i++) {
        if(id === IDs[i]) {
            checkFoundID = false
            console.log("ID: ", IDs[i], "; Name: ", names[i], "; Price: ", prices[i], "; Review: ", reviews[i])    
        } 
    }
    if(checkFoundID) {
        console.log("The ID has not been found.")
    }
}

function searchByName(name) {
    let checkFoundName = false
    for(let i = 0; i < IDs.length; i++) {
        if(name === names[i]) {
            checkFoundName = true
            console.log(name, " - ID: ", IDs[i]) 
        } 
    }
    if(checkFoundName === false) {
        console.log("The name has not been found.")
    }
}

function showOrderedByID(arrayID) {
    let auxiliarArrayID = arrayID
    for(let i = 0; i < auxiliarArrayID.length - 1; i++) {
        for(let j = 0; j < auxiliarArrayID.length - i - 1; j++) {
            if(auxiliarArrayID[j] > auxiliarArrayID[j + 1]) {
                let temp = auxiliarArrayID[j]
                auxiliarArrayID[j] = auxiliarArrayID[j + 1]
                auxiliarArrayID[j + 1] = temp
            }
        }
    }
    return auxiliarArrayID
}

function showByReview(reviewArray) {
    let auxiliarReviewArray = reviewArray
    for(let i = 0; i < auxiliarReviewArray.length - 1; i++) {
        for(let j = 0; j < auxiliarReviewArray.length - i - 1; j++) {
            if(auxiliarReviewArray[j] > auxiliarReviewArray[j + 1]) {
                let temp = auxiliarReviewArray[j]
                auxiliarReviewArray[j] = auxiliarReviewArray[j + 1]
                auxiliarReviewArray[j + 1] = temp
            }
        }
    }
    return auxiliarReviewArray
}

function updatePrice(productID, newPrice) {
    let temp = 0
    for(let i = 0; i < IDs.length; i++) {
        if(productID[i] === IDs[i]){
            temp = i
        }
    }
    let oldPrice = prices[temp]
    prices[temp] = newPrice
    console.log("The price $", oldPrice ," at position ", temp, " was updated to $", newPrice)
}

function deleteProduct(DeleteThisID) {
    let productName
    for(let j = 0; j < names.length; j++) {
        if(DeleteThisID === IDs[j]){
            productName = names[j]
        }
    } 
    let updatedIDsArray = []
    let updatedNamesArray = []
    let updatedPricesArray = []
    let updatedReviewsArray = []
    let positionCont = 0
    for(let i = 0; i < IDs.length; i++) {
        if(DeleteThisID !== IDs[i]){
            updatedIDsArray[positionCont] = IDs[i]
            updatedNamesArray[positionCont] = names[i]
            updatedPricesArray[positionCont] = prices[i]
            updatedReviewsArray[positionCont] = reviews[i]
            positionCont++
        }
    }
    if(updatedIDsArray.length === IDs.length){
        console.log("The item has not been found, try again.")
    } else {
        IDs = updatedIDsArray
        names = updatedNamesArray
        prices = updatedPricesArray
        reviews = updatedReviewsArray
        console.log("The product of ID: ", DeleteThisID, " and name: ", productName, " was deleted.")
    }
}

