const ground1 = document.querySelector(".ground1");
const ground2 = document.querySelector(".ground2");

ground1.style.left = "0%";
ground2.style.left = "100%";

// for (let i = 0; i <= 100; i++) {
//   setTimeout(() => {
//     ground1.style.left = parseInt(ground1.style.left) - 1 + "%";
//     if (ground1.style.left === "-100%") {
//       ground1.style.left = "100%";
//       setTimeout(() => {
//         ground1Move();
//       }, 100);
//     }
//   }, i * 25);
// }

// const ground1Move = () => {
//   for (let i = 0; i <= 200; i++) {
//     setTimeout(() => {
//       ground1.style.left = parseInt(ground1.style.left) - 1 + "%";
//       if (ground1.style.left === "-100%") {
//         ground1.style.left = "100%";
//         ground1Move();
//       }
//     }, i * 24.8);
//   }
// };

// const ground2Move = () => {
//   for (let i = 0; i <= 200; i++) {
//     setTimeout(() => {
//       ground2.style.left = parseInt(ground2.style.left) - 1 + "%";
//       if (ground2.style.left === "-100%") {
//         ground2.style.left = "100%";
//         ground2Move();
//       }
//     }, i * 25);
//   }
// };

ground1Move();
// ground2Move();

// setInterval(() => {
//   for (let i = 0; i <= 200; i++) {
//     setTimeout(() => {
//       ground2.style.left = parseInt(ground2.style.left) - 1 + "%";
//       if (ground2.style.left === "-100%") {
//         ground2.style.left = "97%";
//       }
//     }, i * 20);
//   }
// }, 4000);
// for (let i = 0; i <= 200; i++) {
//     setTimeout(() => {
//       ground2.style.left = parseInt(ground2.style.left) - 1 + "%";
//       console.log(ground2.style.left);
//       if (ground2.style.left === "-100%") {
//         ground2.style.left = "99%%";
//       }
//     }, i * 20);
//   }
