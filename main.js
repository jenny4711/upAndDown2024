//random number 지정
//번호입력란 그리고 go button
// 맞추면 정답이다 
// 번가 유저번호버보다 크면 크다 라고해준다
//번호가 유저번호보다 작으면 작다 라고해준다
//reset
//5버ㄴ기회
// 유가 1-100 범위 밖에 숫자를 입력하면 기회를 알려준다.
//유저가 이미 입력한 ㄴ숫자를 또입력하면 알려준다. 기회를 깍지 않는다.
const btn = document.getElementById("btn")
const input=document.getElementById('input')
const result = document.getElementById('result')
const reset=document.getElementById('reset')
const imgDiv=document.getElementById('imgDiv')
let up='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnNycjdpMnp6c2tjY2R4Z2Z5dGh0amhwZGN2bGpwdXFmMDk0b3A5dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26ufbhAiPrAlyvY4g/giphy.gif'
let down='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjJleXB3ODd1Njhpb2J6dG10eW5wZWtnc2N5d2FrZW9jamh0MzJkdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bT6Pm2c3lZlVL5JFjY/giphy.gif'
let right='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWhnb3J0Z2ZxYzY5cWc4a3drbnE5MW4xYXY4aGp5eGluYWNrYnl4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8W9q3R3kk6inJdnutC/giphy.gif'
let dup='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzFoYWNhNDN2ZzlpM2V5c293dG14bGJ1NHNrNWxzdGlyY2VvbDFiNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jUvbhe62rcK2X6mwHn/giphy.gif'
let none ='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnpzMjc1OHJ1aGF3ZjZhenhrbWdqYTNqd2t5aDdkdmlxdXE5a2lmYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WUm82cVmX7evraJKym/giphy.gif'
let compNum=0
let userNum=[]

function pickRandomNum(){
  compNum = Math.floor(Math.random()*100)+1
  console.log(compNum,'정답')
}

function addImg(img){
  if (imgDiv.firstChild) {
    imgDiv.removeChild(imgDiv.firstChild);
  }
const getImg = document.createElement("img")
getImg.setAttribute('src',`${img}`)
imgDiv.appendChild(getImg)
console.log(img,'add')
}

function checkDuplicate(num){
  console.log(userNum,'userNum22')
 if(userNum.includes(num)) {
  console.log('you already did it !')
  return 'dup'


 }else if(num > 100 || num <= 0){
console.log(`${num} is over 100!!`)
return 'none'
 } else{
  userNum.push(num)
  console.log(userNum,'userNum')
  return true
 }
 
}

function getAnswer (num){
 
  let check=checkDuplicate(num)
 if(check === 'dup'){
  addImg(dup)
 }else if(check === 'none'){
  result.textContent ="1부터 100 사이번호를 적어주세요."
  addImg(none)
 }else{
  if(num>compNum){
    result.textContent='DOWN'
  addImg(down)
    console.log('down')
  }else if(num < compNum){
    result.textContent="UP"
    addImg(up)


    console.log('up')
  }else{
    result.textContent="정답"
    addImg(right)
    console.log('정답')
  }
 }
 
}

btn.addEventListener("click",()=>{

let userValue=input.value
if(userNum.length < 5){
getAnswer(userValue)
}else{
  btn.disabled=true;
  result.textContent='기회를 전부 사용하셨습니다.'
}

input.value=""
})

reset.addEventListener("click",()=>{
  userNum=[]
  compNum=0
  input.value=""
  imgDiv.removeChild(imgDiv.firstChild);
  btn.disabled=false

})

pickRandomNum()