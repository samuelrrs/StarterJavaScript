const apenasPares = (x, y) => {
  for (var i = x; i <= y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

apenasPares(1, 20)