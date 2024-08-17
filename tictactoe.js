let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turn0 = true
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        if (turn0){
        box.innerText = "O" ;
        box.style.color = "blue"
        turn0=false;
        }else{
            box.innerText = "X";
            box.style.color = "#b0413e"
            turn0 = true

        }
        box.disabled = true;
        checkWinner();
    });
})
const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = () =>{
    for(let pattern of winpatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val ==pos3Val){
                console.log("winner",pos1Val)

                showWinner(pos1Val);
            }
        }

     
    }
}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)


































 // let gamenum = 25
// // let usernum = prompt("enter the number")
// // while (usernum != gamenum){
// //     let usernum = prompt("you have entered wrong number , enter write number again :")

// // const { use } = require("express/lib/router")

// // }
// // console.log("congratulations you have entered right number")4

// // let my_string = `this is string literals`;
// // console.log(my_string)
// // let obj  = {
// //     item :"pen",
// //     price: 21,
// //     color : "red"

// // }
// // console.log("the cost of", obj.item, "is", obj.price ,"rupees,which is in", obj.color,"color")
// // console.log(`the cost of ${obj.item} is ${obj.price} rupees which is in ${obj.color} color`)
// // console.log(`the cost of ${1+2+3+4} color`)

// // l =[1,2,3,4]

// // let l = [1,2,4,4]
// // let sum =0
// // // let length = len(l)
// // for(let i in l){
// //     sum += l[i]
// // }
// // console.log(sum)

// // let my_str = "sowmya reddy";

// // console.log(my_str)
// // my_str[2] = "p";
// // console.log(my_str)
// // let user = prompt("enter your full name :")
// // let length = user.length
// // let usernames = `@${user}${length}`
// // console.log(`your username is : ${usernames}`)

// // arrays
// // linear form of storing info

// // let heroes = ["ironman", "thor", "shaktiman", "antman"]
// // for (let i in heroes){
// //     console.log(heroes[i])
// // }
// // for(let ele of heroes){
// //     console.log(ele)
// // }

// // let marks_of_students = [85,97,44,37,76,60]
// // let sum = 0
// // for(let i of marks_of_students){
// //      sum+=i;
// // }
// // let length = marks_of_students.length
// // console.log(`average marks of students is :${sum/length}`)

// // let items = [250,645,300,900,50]
// // let offer

// //way 1
// // for (let i of items){
// //     console.log("before",i)
// //     offer=i/10
// //     i = i-offer
// //     console.log("after",i)
// // }

// //way2
// // let length = items.length
// // for(let i in items){
// //     offer = items[i]/10
// //     items[i]=items[i]-offer
    
// // }
// // console.log(items)
// //way3
// // for (let i=0;i<length;i++){
// //     offer=items[i]/10
// //     items[i] = items[i]-offer
    
// // }
// // console.log(items)
// // let veggies = ["potato","tomato","spinach"]
// // console.log(veggies)
// // console.log(veggies.toString())

// // //arrays in js
// // let arr = [1,2,3,4,5,5,6,7]


// // console.log(arr)

// // let companies = ["Bloomberg", "microsoft","uber", "google","IBM","netflix"]
// // companies.shift()
// // console.log(companies)
// // companies.splice(1,1,"Ola")
// // console.log(companies)
// // companies.push("Amazon")
// // console.log(companies)


// // function myFunction(a,b){
// //     return a-b;
// // }
// // let result = myFunction(3,3)
// // console.log(result)

// // const arrowmul = (a,b) =>{
// //     console.log(a*b)
// // }
// // arrowmul(2,3)


// // const arrowsum = (a,b) =>{
// //     console.log("sum of the numbers are:",a+b)

// // }
// // arrowsum(5,7)

// // const difference = (a,b) =>{
// //     return a-b
// // }
// // let value = difference(6,4)
// // console.log(value)






// // function my_function(name){
// //     let vowels = ["a","e","i","o","u"]
// //     let count = 0

// //     for (let i of name) {
// //         for (let j of vowels){
// //             if(i ==j){
// //                 count++
// //              }
// //         }
// //     }
// //     console.log(count)
// // }

// // console.log(my_function("thanmayi"));

// // let arrowfun = (name) =>{
// //     let vowels = ["a","e","i","o","u"]
// //     let count = 0

// //     for (let i of name) {
// //         for (let j of vowels){
// //             if(i ==j){
// //                 count++
// //              }
// //         }
// //     }
// //     console.log(count)

// // }

// // let fun = arrowfun("sowmya");

// // console.log(fun)

// // let arr = ["sowmya","kavya","thanmayi"]
// // arr.forEach((val,idx,arr) => {
// //     console.log(val.toUpperCase(),idx,arr)
// // })

// // let arr = [8,2,9,4,5]
// // let square = arr.map((val) => {
// //     return val*val
// // })

// // console.log(square)
// // let newarr = arr.filter((arr) =>{
// //     return arr%2 === 0;
// // })
// // console.log(newarr)


// // let output = arr.reduce((res ,curr) =>{
// //    return res > curr ? res :curr;
// // })
// // console.log(output)

// // let marks = [97,64,32,49,99,96,86]
// // let output = marks.filter((marks)=>{
// //     return marks > 90;
// // })
// // console.log(output)

// // let n =prompt("enter the number");
// // let my_arr = []
// // sum =0 
// // for(let i=1;i<=n;i++){
// //     my_arr[i-1]=i
// //     sum+=my_arr[i-1]
// // }
// // console.log(my_arr)
// // console.log(sum)


// // let n =prompt("enter the number");
// // let my_arr = []
// // for(let i=1;i<=n;i++){
// //     my_arr[i-1]=i
// // }
// // console.log(my_arr);
// // let output = my_arr.reduce((res ,curr) =>{
// //     s  = res * curr;
// //     return res + curr 
   
// //  })
// //  console.log("sum of array of elements is :",output)
// //  console.log("product of array of elements is :",s)
// // let heading = document.getElementById("heading")
// // console.dir(heading)
// // let para = document.querySelectorAll("p")
// // console.dir(para)
// // console.log(para)

// // let ele = document.getElementsByClassName("box")
// // console.dir(ele)
// // let div = document.querySelectorAll(".box")
// // let idx = 1
// // for (let i of div){
// //     i.textContent = `new unique elements${idx++}`
// // }
// // console.log(i.textContent)

// // let div = document.querySelector("div")
// // console.log(div)
// // // let id = div.getAttribute("id")
// // // console.log(id)
// // let id2 = div.setAttribute("class","box2")
// // console.log(id2)

// // let newHeading = document.createElement("h1")

// // newHeading.innerHTML= "<i>hey this is sowmya</i>";
// // document.querySelector("body").after(newHeading);

// // let h1 = document.querySelector("h1")
// // h1.remove()
 
// // let new_button = document.createElement("button")
// // new_button.innerText = "click me"
// // console.log(new_button)
// // new_button.style.backgroundColor ="red" 
// // new_button.style.color = "white"

// // document.querySelector("body").prepend(new_button)

// // let para = document.querySelector("p")
// // console.log(para)
// // para.getAttribute("p");
// // para.classList.add("newClass")
// // let  btn1 = document.querySelector("#btn1")

// // console.log(btn1)
// // btn1.onclick = (e)=>{
// //    console.log('button was clicked');alert('hello')
// //    console.log(e)
// //    console.log(e.type, e.clientX, e.clientY)
// //    console.log(e.target)
// // }
// // let  btn2 = document.querySelector("#btn2")
// // btn2.ondblclick=()=>{
// //     console.log('button was clicked 2 times')
// // }
// // let  para = document.querySelector(".para")
// // para.onmouseover=()=>{
    
// //     console.log('you are inside')
    
// // }


// //same above work with evebtlisteners
// // btn1.addEventListener("click",() =>{
// //     console.log("button was clciked 1")
// // })
// // btn1.addEventListener("click",() =>{
// //     console.log("button was clciked 2")
// // })
// // const handler3 = () =>{
// //     console.log("button was clciked 3")
// // }
// // btn1.addEventListener("click", handler3)
// // btn1.addEventListener("click",() =>{
// //     console.log("button was clciked 4")
// // })

// // btn1.removeEventListener("click", handler3)

// // toggle 
// // let currentmode = "light";
// // let body = document.querySelector("body")
// // btn1.addEventListener("click",() =>{
    
// //     if(currentmode=="light"){
// //         currentmode= "dark";
// //         body.classList.add("dark")
// //         body.classList.remove("light")
// //     } else{
// //         currentmode = "light"
// //         body.classList.add("light")
// //         body.classList.remove("dark")

// //     }

// //     console.log(currentmode)
// // })

// let my_box = document.querySelector("#box")

// let body1 = document.querySelector("div")
// let bgcolor = "blue"
// console.log(body1)
// my_box.addEventListener("mouseover",()=>{
    
//     bgcolor = "green"
//     body1.classList.add("blue")
    
 
// })