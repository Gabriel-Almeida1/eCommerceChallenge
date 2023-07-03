let IDs = []
let names = []
let prices = []
let reviews = []
let shoppingCartNames = []
let shoppingCartQuantities = []
let shoppingCartValues = []
let contRegister = 0
let contCart = 0
let programStop = true

while (programStop) {
    let programStart = parseInt(prompt("Type 1 to stop or 2 to start: "))
    if(programStart === 1) { // stop the loop
        programStop = false
    } else if (programStart === 2) { // start the program

        let chooseFunction = parseInt(prompt("1-Register, 2-Search by ID, 3-Search by name, 4-Order by ID, 5-Show by review, 6-Update the price, 7-Delete the product, 8-Add item in cart, 9-Delete product from cart, 10-Total cart sum, 11- Show products and values."))

        if(chooseFunction > 12 || chooseFunction < 1) { // check if it's choosing the right options
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
        } else if (chooseFunction === 7) { // delete a product by its ID
            let IDtoDelete = parseInt(prompt("Insert the ID to delete the product: "))
            deleteProduct(IDtoDelete)
        } else if (chooseFunction === 8) { // add items in the cart
            let addItemCart = prompt("Type the item to add in the shopping cart: ")
            let addQuantityItem = parseInt(prompt("Type the amount of itens you want to add: "))
            shoppingCartAdd(addItemCart, addQuantityItem)
        } else if (chooseFunction === 9) {
            let productToDeleteFromCart = prompt("Type the produce you want to remove from the cart: ")
            let productToDeleteFromCartQuant = prompt("Type the quantity of produce you want to remove from the cart: ")
            deleteCartProduct(productToDeleteFromCart, productToDeleteFromCartQuant)
        } else if (chooseFunction === 10) {
            cartProductsValuesSum()
        } else if (chooseFunction === 11) {
            showCartProductsAndValues()
        }
    }
}

console.log("ID: ", IDs)
console.log("Name: ", names)
console.log("Prices: ", prices)
console.log("Reviews: ", reviews)
console.log("Shopping  cart: ", shoppingCartNames)
console.log("Shopping cart quantities: ", shoppingCartQuantities)
console.log("Shopping cart values: ", shoppingCartValues)

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

function shoppingCartAdd(name, quantity){
    let ifNameExist = false
    for(let i = 0; i < shoppingCartNames.length; i++){
        if(name === shoppingCartNames[i]){
            shoppingCartQuantities[i] += quantity
            console.log("Item already exist, quantity added.")
            ifNameExist = true
        } 
    } if(ifNameExist === false) {
        shoppingCartNames[contCart] = name
        shoppingCartQuantities[contCart] = quantity
        contCart++
        console.log("Item added.")
    }
    
}

function deleteCartProduct(name, quantity){
    let auxCartName = []
    let auxCartQuant = []
    let cont = 0
    for(let i = 0; i < shoppingCartNames.length; i++) {
        if(name === shoppingCartNames[i] ){
            shoppingCartQuantities[i] -= quantity
            if(shoppingCartQuantities[i] === 0) {
                console.log("Item deleted.")
                for(let j = 0; j < shoppingCartNames.length; j++){
                    if(shoppingCartNames[j] !== name){
                        auxCartName[cont] = shoppingCartNames[j]
                        auxCartQuant[cont] = shoppingCartQuantities[j]
                        cont++
                    }
                }
                shoppingCartNames = auxCartName
                shoppingCartQuantities = auxCartQuant     
            } 
        } 
    }
}

function cartProductsValuesSum(){
    let totalSum = 0
    for(let i = 0; i < shoppingCartNames.length; i++){
        let itemPrice = parseFloat(prompt("Item: ", shoppingCartNames[i], "; insert price: "))
        shoppingCartValues[i] = itemPrice
    }
    for(let j = 0; j < shoppingCartValues.length; j++){
        totalSum = totalSum + (shoppingCartQuantities[j] * shoppingCartValues[j])
    }
    console.log("The total sum is: $", totalSum)
}

function showCartProductsAndValues(){
    for(let i = 0; i < shoppingCartNames.length; i++){
        let productSum = 0
        productSum = productSum + (shoppingCartQuantities[i] * shoppingCartValues[i])
        console.log("Product: ", shoppingCartNames[i], "; Total sum: ", productSum)
    }
}

