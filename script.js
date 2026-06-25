function startQuiz() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
}

function showResult(choice) {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  let result = "";

  if (choice === "space") {
    result = "🔭 You should visit Space Odyssey and watch an IMAX space film.";
  } else if (choice === "dinosaurs") {
    result = "🦖 You should visit Prehistoric Journey and explore fossils.";
  } else if (choice === "gems") {
    result = "💎 You should visit Gems & Minerals and see the sparkling collection.";
  } else if (choice === "animals") {
    result = "🐾 You should visit wildlife exhibits and learn about ecosystems.";
  }

  document.getElementById("recommendation").innerHTML = result;
}

function restart() {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}
