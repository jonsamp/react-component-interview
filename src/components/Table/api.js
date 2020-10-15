export async function getDataAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            revUpScore: 100,
            name: "Erin Michaels",
            givingHistory: 29429,
          },
          {
            revUpScore: 92.4,
            name: "Sean Allen",
            givingHistory: 558,
          },
          {
            revUpScore: 87.2,
            name: "Miguel Marenco",
            givingHistory: 132991,
          },
          {
            revUpScore: 84.5,
            name: "Allison Foster",
            givingHistory: 124002,
          },
          {
            revUpScore: 80.5,
            name: "Eric Andes",
            givingHistory: 460689,
          },
          {
            revUpScore: 78.5,
            name: "Michelle Lee",
            givingHistory: 68950,
          },
          {
            revUpScore: 72.5,
            name: "Katherine Bradley",
            givingHistory: 48400,
          },
        ]),
      500
    );
  });
}
