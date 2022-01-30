// 1. (Main theme: Programming Basics)
function divisibleBy() {
  const hundred = [...Array(101).keys()];
  const divide = hundred.slice(1).map((x) => {
    if (x % 5 == 0) {
      console.log(x + " This is divisibleby 5");
    } else if (x % 3 == 0) {
      console.log(x + " This is divisibleby 3");
    } else if (x % 3 == 0 || x % 5) {
      console.log("JACKPOT");
    }
  });
}
divisibleBy();

/// 2. (Main theme: DOM manipulation)

const body = document.querySelector("body");
const btn = document.createElement("button");
body.append(btn);

btn.textContent = "Click for a pic";

btn.addEventListener("click", () => {
  const img = document.createElement("img");
  img.style.width = "300px";
  img.src = "https://source.unsplash.com/random";
  body.append(img);
});

//3. (Main theme: Async API calls)

fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => {
    const ul = document.createElement("ul");
    ul.innerHTML = `<li>${data.data[0].first_name}</li>
                    <li>${data.data[1].first_name}</li>
                    <li>${data.data[2].first_name}</li>
    `;
    body.append(ul);
  })
  .catch((err) => console.log(err));
