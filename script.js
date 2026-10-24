
const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.remove("active");
    });

    pages.forEach((page) => {
      page.classList.add("hidden");
    });

    tab.classList.add("active");

    document
      .getElementById(tab.dataset.page)
      .classList.remove("hidden");
  });
});

const sensitivity = document.getElementById("sensitivity");
const sensValue = document.getElementById("sensValue");

sensitivity.addEventListener("input", () => {
  sensValue.textContent = sensitivity.value;
});

document.getElementById("start").onclick = () => {
  document.getElementById("message").textContent =
    "Sessão de treino preparada!";
};

document.getElementById("save").onclick = () => {
  document.getElementById("aimMessage").textContent =
    "Configurações aplicadas à interface.";
};

document.getElementById("reset").onclick = () => {
  sensitivity.value = 50;
  sensValue.textContent = "50";
  document.getElementById("duration").value = "30";
  document.getElementById("animations").checked = true;
  document.getElementById("aimMessage").textContent = "";
};

document.getElementById("close").onclick = () => {
  document.querySelector(".panel").classList.add("hidden");
};
