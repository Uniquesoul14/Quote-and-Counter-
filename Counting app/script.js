const digit = document.getElementById("digit");

const add = document.getElementById("add");
const sub = document.getElementById("sub");
const doub = document.getElementById("doub");
const div = document.getElementById("div");
const clr = document.getElementById("clr");

let  count = 0 ;
 
add.addEventListener("click" , () => {

    count ++ ;
    digit.innerHTML = count;

});

sub.addEventListener("click" ,() => {

    if(count > 0 )
    {
        count --;
    }
    digit.innerHTML = count;

});

doub.addEventListener("click" , () => {

    if(count == 0)
    {
        digit.innerHTML = "Any number get mul by 0 will always be 0";
    }
    else
    {
        count *= 2;
        digit.innerHTML = count;

    }

});

div.addEventListener("click" , () => {

    if(count == 0)
    {
        digit.innerHTML = "diving 0 with ay integer result to be inifinite";
    }
    else
    {
        count /= 2;
        digit.innerHTML = count;

    }

}); 
clr.addEventListener("click" , () => {

    count =0 ;
    digit.innerHTML = count;

});