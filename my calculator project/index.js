let result = document.getElementById("inputext")

let calculate = (Number) => {
    result.value = result.value + Number;
}


let output = () => {
    try {

        result.value = eval(result.value)
    }
    catch (err) {
        alert("Enter a valid input");
    }
}
function clr() {
    result.value = " ";
}
function del() {
    result.value = result.value.slice(0, -1);
} 