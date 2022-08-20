// step - 1 : add event handler with the withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step - 2 : get the withdraw amount from the input field
    // step - 2.5: also convert to number a string of in input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7: clear the deposit field
    withdrawField.value = '';


    if (isNaN(newWithdrawAmount)) {
        alert('Please enter a number')
        return;
    }


    // get previous withdraw total

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawalTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawalTotalString)

    // calculate total withdraw amount

    // step - 5 : set the total withdraw amount
    // get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Mon diye class koro, valo job pele tkhhn ei number gulu use koro...!')
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal


    // calculate new balanceTotal
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})
