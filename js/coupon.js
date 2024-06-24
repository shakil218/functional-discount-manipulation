document.querySelector('#payment-btn').addEventListener('click',function(){
  const previousPrice = getTotalElementPriceById('total-price')
  const paymentPrice = getTotalElementPriceById('payment-price')

  const discountPrice = previousPrice * 30 / 100
  const totalPrice = previousPrice - discountPrice
 
  
  // const payableWithDiscountTotalPrice = setTotalPayablePrice('payment-price', totalPrice)
  // const payableWithoutDiscountTotalPrice = setTotalPayablePrice('payment-price',previousPrice)

  const inputFieldValue = getInputFieldValueById('input-field')

  const getPromoCode = document.getElementById('promo-code')
  const promoCode = getPromoCode.innerText

  if(inputFieldValue === promoCode){
    return setTotalPayablePrice('payment-price', totalPrice)
  }else{
    setTotalPayablePrice('payment-price',previousPrice)
  }

  // console.log(previousPrice,paymentPrice);
})