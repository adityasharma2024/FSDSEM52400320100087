// function sumOfSquareRoots(a, b) {
//     let sum = 0;

//     for (let i = a; i <= b; i++) {
//         sum += Math.sqrt(i);
//     }

//     return sum;
// }

// console.log(sumOfSquareRoots(1, 5));


// function sumwithmsg(clbk, msg) {
//     const result = clbk(20,40);
//     return msg+result;
// }
// sumwithmsg(sum, "The sum is: ");


// PROMISE IN JS

// const myPromise = new Promise((resolve, reject) => {
//     let username = "John";
//     let password = "1234";
//     if (username === "John" && password === "1234") {
//         resolve("Login successful");
//     } else {
//         reject("Login failed");
//     }
// });

// myPromise .then((msg) => {
//     console.log(msg);
// }).catch((msg) => {
//     console.log(msg);
// });
// .finally(() =>console.log("All resources has been closed"))


// async function loginhandler(){
//     try{
//         const myPromise = await myPromise;
//         console.log(myPromise);
//     }catch(e){
//         console.log(e);
//     }finally{
//         console.log("All resources has been closed");
//     }
// }
// loginhandler();

// const root = document.getElementById("root");
// const button = document.getElementById("button");

// const h2 = document.createElement("h2");
// const h1 = document.createElement("h1");
// const img = document.createElement("img");
// const alt = document.createAttribute("alt");
// function getData() {
//     try {
//         img.setAttribute("src", "https://randomuser.me/api/portraits/men/75.jpg");

// const container = document.createElement("div");
// const root  = ReactDOM.createRoot(container);
// const h1 = React.createElement("h1", null, "Hello World");
// root.render(h1);
// document.body.appendChild(container);   
