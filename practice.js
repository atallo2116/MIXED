function xx() {
  for (let i = 0; i < 4; i++) {
    (function (iCopy) {
      setTimeout(() => console.log(iCopy), i * 1000);
    })(i);
  }
}

xx();
