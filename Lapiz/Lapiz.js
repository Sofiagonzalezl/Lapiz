let canva = document.querySelector("#myCanvas")
let ctx = canva.getContext ("2d")
ctx.fillStyle = "#D6B047"
ctx.strokeStyle = "#000000"
ctx.beginPath()
ctx.rect ( 200, 50, 70, 200)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#94672C"
ctx.strokeStyle = "#663300"
ctx.beginPath()
ctx.moveTo(250,300)
ctx.lineTo(250,300)
ctx.lineTo(270,250)
ctx.lineTo(200,250)
ctx.stroke()
ctx.fill()

ctx.beginPath()
ctx.moveTo(260, 55)
ctx.lineTo(260, 255)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#000000"
ctx.strokeStyle = "#000000"
ctx.beginPath()
ctx.moveTo(210, 50)
ctx.lineTo(210, 50)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#ff5050"
