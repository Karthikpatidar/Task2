window.addEventListener ("mousemove", function (dets) {
    lerp.style.display = "initial";
    document.querySelector ("#lerp").style.transform = `translate(${dets.clientX-160}px, ${dets.clientY-81}px)`
})

document.querySelector ("#img1").addEventListener ("mousemove", function () {
    lerp.style.width = "60px";
    lerp.style.height = "60px";
    lerp.style.backgroundColor = "black"; 
})


document.querySelector ("#img1").addEventListener ("mouseout", function () {
    lerp.style.width = "30px";
    lerp.style.height = "30px"; 
    lerp.style.backgroundColor = "transparent";
    lerp.style.border = "2px solid black";
})


document.querySelector ("#img3").addEventListener ("mousemove", function () {
    lerp.style.width = "60px";
    lerp.style.height = "60px";
    lerp.style.backgroundColor = "black"; 
})

document.querySelector ("#img3").addEventListener ("mouseout", function () {
    lerp.style.width = "30px";
    lerp.style.height = "30px"; 
    lerp.style.backgroundColor = "transparent";
    lerp.style.border = "2px solid black";
})

 document.querySelector ("#text").addEventListener ("mousemove", function () {
    lerp.style.width = "60px";
    lerp.style.height = "60px";
    
})

document.querySelector ("#text").addEventListener ("mouseout", function () {
    lerp.style.width = "30px";
    lerp.style.height = "30px"; 
    // main.style.backgroundColor = " rgb(251, 243, 231)"
})

document.querySelector ("#text2").addEventListener ("mousemove", function () {
    lerp.style.width = "60px";
    lerp.style.height = "60px";
    // main.style.backgroundColor = "#DCD5CF"
})

document.querySelector ("#text2").addEventListener ("mouseout", function () {
    lerp.style.width = "30px";
    lerp.style.height = "30px"; 
    // main.style.backgroundColor = " rgb(251, 243, 231)"
})

document.querySelector ("#navbar").addEventListener ("mousemove", function () {
    lerp.style.width = "60px";
    lerp.style.height = "60px";
    lerp.style.backgroundColor = "black"; 
})

document.querySelector ("#navbar").addEventListener ("mouseout", function () {
    lerp.style.width = "30px";
    lerp.style.height = "30px"; 
    lerp.style.backgroundColor = "transparent";
    lerp.style.border = "2px solid black";
})
