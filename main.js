var change = document.querySelector("div");
var sizeLargeBtn = document.querySelector(".sizeLarge");
var sizeSmallBtn = document.querySelector(".sizeSmall");

function large()
{
    change.classList.add("sizeLarge")
    change.classList.remove("sizeLargeBtn ")
}

function small()
{
    change.classList.add("sizeSmall")
    change.classList.remove("sizeSmallBtn ")
}

sizeLargeBtn.onclick = large;
sizeSmallBtn.onclick = small;