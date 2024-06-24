function getTotalElementPriceById(elementId){
  const getPrice = document.getElementById(elementId)
  const getPriceString = getPrice.innerText
  const totalPrice = parseFloat(getPriceString)
  return totalPrice
}

function getInputFieldValueById(inputId){
  const inputText = document.getElementById(inputId)
  const value = inputText.value
  inputText.value = ''
  return value
}

function setTotalPayablePrice(elementId,newValue){
  const payablePrice = document.getElementById(elementId)
  payablePrice.innerText = newValue
}