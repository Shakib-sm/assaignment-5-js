let coin = 100;
    let heart = 0;
    let copyCount = 0;

    const coinEl = document.getElementById("coin");
    const heartEl = document.getElementById("heart");
    const copyEl = document.getElementById("copyCount");
    const historyList = document.getElementById("historyList");
    const clearBtn = document.getElementById("clearHistory");

    // Clear history
    clearBtn.addEventListener("click", () => {
      historyList.innerHTML = "";
    });
    document.querySelectorAll(".card").forEach(card => {
      const numberEl = card.querySelector(".card-number");
      const number = numberEl.innerText.trim();

      card.querySelector(".fa-copy").parentElement.addEventListener("click", () => {
        navigator.clipboard.writeText(number);
        copyCount++;
        copyEl.innerText = copyCount + " Copy";
      });

      card.querySelector(".fa-heart").addEventListener("click", () => {
        heart++;
        heartEl.innerText = heart;
      });

      card.querySelector(".fa-phone").parentElement.addEventListener("click", () => {
        let time = new Date().toLocaleTimeString();
        if (coin >= 20) {
          coin -= 20;
          coinEl.innerText = coin;
          historyList.innerHTML += `<div class="mt-1">📞 Call Sent to <b>${number}</b> at ${time}</div>`;
        } else {
          historyList.innerHTML += `<div class="mt-1 text-red-600">❌ Call Not Sent (No Coin) at ${time}</div>`;
        }
      });
    });