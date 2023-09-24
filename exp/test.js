// class ApiService {
//   async call() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/postz");
//     if (!response.ok) {
//       return Promise.reject(new Error("Failed to fetch <URL>"));
//     }
//     return response.json();
//   }
// }

// function process() {
//   const initiatorStack = new Error().stack;
//   new ApiService().call().catch((error) => {
//     // ?
//     const completeStack = [
//       error.stack,
//       ...initiatorStack.split("\n").slice(1),
//     ].join("\n");
//     console.log(completeStack);
//   });
// }

// document.querySelector("button").addEventListener("click", () => {
//   process();
// });

// window.addEventListener("unhandledrejection", (x) => {
//   console.log("@@@OY", x);
// });

class ApiService {
  async call() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(
        "Failed to fetch https://jsonplaceholder.typicode.com/postz"
      );
    }
    return response.json();
  }
}

function process() {
  new ApiService()
    .call()
    .then((data) => {
      // ...
    })
    .catch((error) => {
      console.log(error);
    });
}

document.querySelector("button").addEventListener("click", () => {
  process();
});
