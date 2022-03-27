function myAlert() {
    alert("You have added item to cart!");
}

// Function for adjustment in cart //
function totalClick(click) {
    const countsum = document.getElementsByClassName('countsum');
    const sumvalue = parseInt(countsum.innerText) + click;
    console.log(countsum + click);
    countsum.innerText = sumvalue;
}
