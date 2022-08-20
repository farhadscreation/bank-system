// add event listener
document.getElementById('btn-deposit').addEventListener('click', function () {
    //    step -2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    // for input field use .value to get the input value inside the in put field
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    // current deposit total
    // non-input (element other than input, textarea) use innertext to get the number
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-4 add numbers to set the total deposit
    const currenDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currenDepositTotal;

    // step - 5: get balance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step - 6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    // step-7: clear the deposit field
    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please enter a number')
        return;
    }

})
