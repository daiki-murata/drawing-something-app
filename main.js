let btn = document.getElementById('btn')
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let mousex, mousey;
let state = false
let color = 0

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// ctx.lineWidth = 50 //線を太くする 
ctx.lineCap = 'round' //線の種類の変更

canvas.addEventListener('mousemove', mouseMove) //マウスが動いていることを検出
canvas.addEventListener('mousedown',mouseDown) //マウスをクリックしたか検出
canvas.addEventListener('mouseup', mouseUp) //マウスを離したことを検出
btn.addEventListener('click', clearBtn)

function clearBtn () {
    ctx.clearRect (0, 0, canvas.width, canvas.height) //クリアボタン
}

function mouseDown(e) {
    mousex = e.clientX
    mousey = e.clientY 
    state = true //マウスがクリックされたらtrueになるようにしておく
}

function mouseUp () {
    state = false
}

function mouseMove (e) {
    if(!state) return; //マウスをクリックしていない状態は関数の実行をしない

    let w = Math.random() * 51 //0~51まで乱数

    // console.log(e.clientX) //マウスのx座標の取得
    ctx.lineWidth = w //線の太さに乱数を当てはめる
    color++
    ctx.strokeStyle = 'hsl('+color+', 100%, 50%)' //線の色の指定。hsl(色素の指定、色の鮮やかさ、色の明るさ)。第一引数が０の時は赤色
    ctx.beginPath() //線を書き始める
    ctx.moveTo(mousex, mousey) //どこから書き始めるか(0, 0)は画面の左上
    ctx.lineTo(e.clientX, e.clientY) //どこまで線を引っ張る
    ctx.stroke() //線を引っ張る

    mousex = e.clientX //更新し続ける
    mousey = e.clientY　//更新し続ける
}