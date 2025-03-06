const form = document.getElementById("form");
const output = document.getElementById("output");
const ipInput = document.getElementById("ip");

//on submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  output.innerText = convertIPV4(ipInput.value);
});

function convertIPV4(ip) {
  //handle null
  if (ip === "") {
    return "";
  }
  //handle binary 8 bit base 2 input
  const ipArr = ip.trim().split(/[. ]+/);
  if (ipArr[0].length === 8) {
    return ipArr
      .map((num) => {
        let decimal = parseInt(num, 2);
        return decimal;
      })
      .join(".");
  } else {
    //handle IP base 10 decimal input
    return ipArr
      .map((num) => {
        let binary = parseInt(num).toString(2);
        while (binary.length < 8) {
          binary = "0" + binary;
        }
        return binary;
      })
      .join(".");
  }
}

// console.log(convertIPV4("10101100.00010000.00011111.00011110"));

// console.log(convertIPV4("172.16.31.30"));
