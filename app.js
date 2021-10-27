const emailVal = document.getElementById("email");
const passVal = document.getElementById("password");
const btn = document.querySelector(".submit-btn");
const errorMsg = document.querySelector(".banner");
btn.onclick = () => {
  (async () => {
    const rawResponse = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailVal.value,
        password: passVal.value,
      }),
    });
    const status = rawResponse.status;
    const data = await rawResponse.json();
    if (status < 300) {
      localStorage.setItem("new Token", data.token);
      location.href = "blog.html";
    } else {
      errorMsg.classList.add("red");
      console.log(errorMsg.classList);
      errorMsg.innerText = data.error;
      setTimeout(function () {
        errorMsg.innerHTML = "";
      }, 3000);
    }
  })();
};
/* "";
"cityslicka"; eve.holt@reqres.in*/
