const text = document.querySelector("textarea");
const encrypt = document.querySelector("#encrypt");
const decrypt = document.querySelector("#decrypt");
const result = document.querySelector(".result");

const rot13 = (string) => {
  let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";

  // use .replace with regex, so only characters a-z are replaced
  return string.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
};

encrypt.addEventListener("click", () => {
  let rotResult = rot13(text.value);

  result.innerHTML = rotResult;
});

decrypt.addEventListener("click", () => {
  let rotResult = rot13(text.value);

  result.innerHTML = rotResult;
});
