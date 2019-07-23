function checkForm(form) {
    if (form.maintenancecosts.value.trim() == "") {

        alert("用户名不能为空!");
        form.username.focus();
        return false;
    }
}
window.onload = function() {
    var myform = document.forms[0];
    myform.onsubmit = function() {
        return checkForm(this);
    }
}