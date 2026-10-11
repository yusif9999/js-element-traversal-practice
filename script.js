// let title = document.getElementById("title")
// let container = document.getElementById("container")
// let box = document.querySelectorAll(".box")
// let boxTitle = document.querySelectorAll(".boxTitle")
// let piece = document.querySelectorAll(".piece")
// let price = document.querySelectorAll(".price")
// let removeButton = document.querySelectorAll(".removeButton")
// let resultButton = document.getElementById("resultButton")
// let invoiceSummary = document.getElementById("invoiceSummary")
// let invoiceTitle = document.getElementById("invoiceTitle")
// let totalAmount = document.getElementById("totalAmount")
// let shippingFee = document.getElementById("shippingFee")
// let delivery = document.getElementById("delivery")

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let isCartCalculated = false

function calculate(){
    let box = document.querySelectorAll(".box")
    let shippingFee = document.getElementById("shippingFee")
    let shippingFeeSpan = document.getElementById("shippingFee").children[0]
    let totalAmount = document.getElementById("totalAmount")
    let delivery = document.getElementById("delivery")
    let cartTotalAmount = 0
    box.forEach((box) => {
        // console.log(box)
        let productQuantity = box.children[1].textContent
        let productPrice = box.children[2].textContent
        console.log(productQuantity)
        console.log(productPrice)
        let cleanedNumericPriceInfo = +productPrice.replace("TL", "").trim()
        let cleanedNumericQuantityInfo = +productQuantity.replace("Quantity:", "").trim()
        console.log(cleanedNumericPriceInfo)
        console.log(cleanedNumericQuantityInfo)

        let totalAmountValue = Math.floor(cleanedNumericQuantityInfo * cleanedNumericPriceInfo)
        console.log(totalAmountValue)  
        cartTotalAmount += totalAmountValue
    })
    if (cartTotalAmount >= 2000) {
        shippingFeeSpan.textContent = "0 TL"
        shippingFeeSpan.classList.add("freeShipping")
        cartTotalAmount -= cartTotalAmount * 0.1
    } else if(cartTotalAmount >= 1000){
        shippingFeeSpan.textContent = "0 TL"
        shippingFeeSpan.classList.add("freeShipping")
    } else{
        shippingFeeSpan.textContent = "49.99 TL";
        shippingFeeSpan.classList.remove("freeShipping");
    }
    totalAmount.textContent = `Total Amount: ${cartTotalAmount} TL`

    let todayDateDay = new Date().getDate()
    let todayDateMonth = months[new Date().getMonth()]
    let todayDateYear = new Date().getFullYear()
    let deliveryTimeDays = 3
    delivery.textContent = `Estimated Delivery: ${todayDateDay + deliveryTimeDays} ${todayDateMonth} ${todayDateYear}`
    console.log(todayDateDay)
    console.log(todayDateMonth)
    console.log(todayDateYear)
    let boxArray = [...box]
    boxArray.forEach((box) => {
        if (box.children[1].textContent.includes("1")) {
            box.style.backgroundColor = "lightCoral"
            box.setAttribute("data-stock", "critical")
            console.log(box.getAttribute("data-stock"))
        }
    })
    isCartCalculated = true
}

function removeProduct(clickedButton){
    let productBox = clickedButton
    productBox.parentElement.style.display = "none"
    productBox.parentElement.classList.remove("box")
    if (isCartCalculated === true) {
        calculate()
    }
}