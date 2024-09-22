document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const value = document.getElementById("name").value;
  if (value) {
    document.getElementById("name-text").innerText = `Olá, ${value}!`;
  }
});
