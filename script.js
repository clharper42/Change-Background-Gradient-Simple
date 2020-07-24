const hex = "0123456789ABCDEF"

const direction = ['bottom', 'left', 'right', 'bottom left', 'bottom right']

let body = document.getElementById('bod');

function twoRanHex (){
    let hexone = "#";
    let hextwo = "#";

    for(var i = 0; i < 6; i++)
    {
        hexone = hexone + hex[Math.floor(Math.random() * Math.floor(hex.length))]
    }

    for(var i = 0; i < 6; i++)
    {
        hextwo = hextwo + hex[Math.floor(Math.random() * Math.floor(hex.length))]
    }
    
    body.style.background= "linear-gradient(to " + direction[Math.floor(Math.random() * Math.floor(direction.length))] + ", " + hexone + ", " + hextwo + ")";
};
