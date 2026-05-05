let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button){
    button.addEventListener("click",function() {
   
                                                            //     display.value+= button.innerText;    
                                                             //if u don't want more code , but this actually don't works perfectly
        let value = button.innerText;
        if(value =="=") {
            display.value = eval(display.value);
        }
        
        else if (value =="Clear all") {

            display.value = "";
        }

        else if (value =="Clear") {

            display.value = display.value.slice(0,-1);

        }

        else if (
            value == "+" ||
            value == "-" ||
            value == "*" ||
            value == "/"
)
{
    if(display.value== "") {
        return;
    }
    let last = display.value[display.value.length - 1];

    if(
        last == "+" ||
        last == "-" ||
        last == "*" ||
        last == "/"
    )
    {
        return;
    }

    display.value += value;
}
        
        else {
            display.value += value;
        }
    });
});