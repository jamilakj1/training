function validateForm() {
    let x = document.forms["myForm"]["nm"].value;
    let y = document.forms["myForm"]["com"].value;
    var m = document.getElementById("male");
    var f = document.getElementById("female");
    if (x == "" || x == null) {
        alert("all field required");
        x.focus();
        return false;
    } else if (y == "" || y == null) {
        alert("all field required");
        y.focus();
        return false;
    } else if (!m.checked && !f.checked) {
        alert("all field required");
        m.focus();
        return false;
    } else {
        return true;
    }
}