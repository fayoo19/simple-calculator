const buttons = document.querySelectorAll('button')
const input = document.querySelector('#input')


buttons.forEach(function(button) {
    button.addEventListener( 'click', (calculate))
})


function calculate(e){
    const clickvalue = e.target.value
    if(clickvalue === "="){
    if(clickvalue !== "")
    input.value = eval(input.value)

}
else if (clickvalue=== "c")
{
    input.value = ""
}
else(input.value += clickvalue)
}