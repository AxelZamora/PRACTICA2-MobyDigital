
// Chequear que el campo no este vacio
function checkEmptyInput(inputID) {
    let title = document.querySelector('#' + inputID).value.trim();
    if (title.length > 0) {
        displayMsgNxtElem(inputID, "");
        return true;
    }
    displayMsgNxtElem(inputID, "<span class='text-danger'>Field cannot be Empty</span>");
    return false;
}
// display de error / success
function displayMsgNxtElem(elementID, errorMsg) {
    let message = document.querySelector("#" + elementID);
    message.nextElementSibling.innerHTML = errorMsg;
    return true;
}
// display de error / success
function displayMsg(elementID, errorMsg) {
    let message = document.querySelector("#" + elementID);
    message.innerHTML = errorMsg;
    setTimeout(() => {
        message.innerHTML = '';
    }, 2500);
    return true;
}

function checkUsername(id) {
    let username = document.querySelector('#' + id).value.trim();
    let regExp = /^[A-Za-z][A-Za-z0-9!@.]*$/;
    if (regExp.test(username)) {
        displayMsgNxtElem(id, "");
        return true;
    } else {
        displayMsgNxtElem(id, "<span class='text-danger'>Invalid Username</span>");
        return false;
    }
}
function checkFullName(id) {
    let username = document.querySelector('#' + id).value.trim();
    let regExp = /\w\s/g;
    if (regExp.test(username)) {
        displayMsgNxtElem(id, "");
        return true;
    } else {
        displayMsgNxtElem(id, "<span class='text-danger'>Invalid Name</span>");
        return false;
    }
}
function numbers(id) {
    let username = document.querySelector('#' + id).value.trim();
    let regExp = /^[0-9]+$/;
    if (regExp.test(username)) {
        displayMsgNxtElem(id, "");
        return true;
    } else {
        displayMsgNxtElem(id, "<span class='text-danger'>Only numbers</span>");
        return false;
    }
}
