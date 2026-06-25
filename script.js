function startQuiz() {
  document.querySelector(".hero").style.display = "none";
  document.getElementById("quiz").classList.remove("hidden");
}

function showResult(choice) {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  let answer = "";

  if (choice === "space") {
    answer = "🌌 You should visit Space Odyssey and watch an IMAX space film. Perfect for curious visitors who like big questions and immersive visuals.";
  }

  if (choice === "dino") {
    answer = "🦖 You should visit Prehistoric Journey. This is best for visitors who love fossils, ancient life, and dramatic museum experiences.";
  }

  if (choice === "gems") {
    answer = "💎 You should visit Gems & Minerals. This is perfect if you want something beautiful, colorful, and visually impressive.";
  }

  if (choice === "animals") {
    answer = "🐾 You should explore the wildlife exhibits. This is best for visitors who like nature, ecosystems, and real-world science.";
  }

  document.getElementById("answer").innerText = answer;
}

function restart() {
  document.getElementById("result").classList.add("hidden");
  document.querySelector(".hero").style.display = "block";
}
