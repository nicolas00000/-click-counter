var bolinhaClick =  document.querySelector(".cursor")
var cliques = document.querySelector(".contador")
let i = 1
document.addEventListener("mousemove",function(m){
    let moveX = m.pageX -10
    let moveY = m.pageY -10
    bolinhaClick.style.left = moveX + 'px'
    bolinhaClick.style.top = moveY + 'px'
})

bolinhaClick.addEventListener("click", function(){
    this.classList.add("cursor-expand")
    cliques.innerHTML = i++

    setTimeout(function(){
        bolinhaClick.classList.remove("cursor-expand")
    },300)
})