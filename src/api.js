export const fetchData = async () => {
    return new Promise((resolve) => {
        setTimeout(async () => {
            const response = await fetch('https://dummyjson.com/c/464b-83e4-4c28-9987');
            const result = await response.json();
            resolve(result.products);

        }, 1000);
    });
};


// Simulated Error:
// export const fetchData = async () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(async () => {
//         const shouldSimulateError = Math.random() < 0.2; // Simulate error 20% of the time
  
//         if (shouldSimulateError) {
//           reject(new Error("Simulated network error"));
//         } else {
//           const response = await fetch('https://dummyjson.com/products/category/womens-shoes');
//           const result = await response.json();
//           resolve(result.products);
//         }
//       }, 2000);
//     });
//   };