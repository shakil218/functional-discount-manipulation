document.querySelector('#discount-btn').addEventListener('click',function(){

  const getPrice = document.getElementById('local-price')
  const getPriceString = getPrice.innerText
  const price = parseFloat(getPriceString)

  const discountPrice = price * 30 / 100
  const payablePrice = price - discountPrice

  const payingAmount = document.getElementById('payable-price')
  const payingAmountString = payingAmount.innerText
  const totalPrice = parseFloat(payingAmountString)

  payingAmount.innerText = payablePrice
})