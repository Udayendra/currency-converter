console.log('main.js Working');
let rate1 = document.querySelector(".rate1");
let rate2 = document.querySelector(".rate2");
let resultbtn = document.querySelector(".result");
let selects = document.querySelectorAll(".options select");
let sel1 = selects[0];
let sel2 = selects[1];
let inputs = document.querySelectorAll(".input input");
let inpt1 = inputs[0];
let inpt2 = inputs[1];

let val = "";
Object.keys(currency_converter.data).forEach((i) => {
    let optionTag = `<option value ="${i}">${i}</option>`;
    val += optionTag;
})

selects.forEach((s) => { s.innerHTML = val; });

function convert(val, fromCurr, toCurr) {
    let v = (val / currency_converter.data[fromCurr].value) * currency_converter.data[toCurr].value;
    let v1 = v.toFixed(3);
    return v1 = 0.0 ? v.toFixed(5) : v1;
}

function displayRate() {
    let v1 = sel1.value;
    let v2 = sel2.value;
    let val = convert(1, v1, v2);
    rate1.innerHTML = `1 ${v1} equals`;
    rate2.innerHTML = `${val} ${v2} `;
}

resultbtn.addEventListener("click", () => {
    let fromCurr = sel1.value;
    let fromVal = parseFloat(inpt1.value);
    let toCurr = sel2.value;
    if(isNaN(fromVal)){
        alert("Enter number");
    }
    else{
        let cVal = convert(fromVal, fromCurr, toCurr);
        inpt2.value = cVal;
    }
})

selects.forEach((s) => {s.addEventListener("change",displayRate)});
