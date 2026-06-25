let currentQuestion = 0;

let scores = {
  space: 0,
  dinosaurs: 0,
  gems: 0,
  animals: 0,
  health: 0
};

const questions = [
  {
    text: "What are you most interested in?",
    answers: [
      { text: "🌌 Space and stars", type: "space" },
      { text: "🦖 Dinosaurs and fossils", type: "dinosaurs" },
      { text: "💎 Gems and minerals", type: "gems" },
      { text: "🐾 Animals and nature", type: "animals" }
    ]
  },
  {
    text: "What kind of museum vibe do you want?",
    answers: [
      { text: "Big and futuristic", type: "space" },
      { text: "Ancient and dramatic", type: "dinosaurs" },
      { text: "Beautiful and aesthetic", type: "gems" },
      { text: "Calm and nature-focused", type: "animals" }
    ]
  },
  {
    text: "Who are you visiting with?",
    answers: [
      { text: "Friends", type: "space" },
      { text: "Family", type: "dinosaurs" },
      { text: "Younger kids", type: "animals" },
      { text: "Just me", type: "gems" }
    ]
  },
  {
    text: "How much time do you have?",
    answers: [
      { text: "30 minutes", type: "gems" },
      { text: "1 hour", type: "space" },
      { text: "2 hours", type: "dinosaurs" },
      { text: "Half a day", type: "animals" }
    ]
  },
  {
    text: "What sounds most fun?",
    answers: [
      { text: "Watching an IMAX movie", type: "space" },
      { text: "Seeing giant skeletons", type: "dinosaurs" },
      { text: "Finding the prettiest exhibit", type: "gems" },
      { text: "Learning about ecosystems", type: "animals" }
    ]
  }
];

const results = {
  space: {
    title: "Space Odyssey",
    description: "You match best with Space Odyssey. It fits visitors who like immersive visuals, big questions, technology, and space exploration.",
    plan: "Start with Space Odyssey, then choose an IMAX space film, then finish with Gems & Minerals for a visually stunning ending."
  },
  dinosaurs: {
    title: "Prehistoric Journey",
    description: "You match best with Prehistoric Journey. It fits visitors who like fossils, ancient life, dramatic displays, and big museum moments.",
    plan: "Start with Prehistoric Journey, spend time with the fossils, then add an IMAX science film if you have extra time."
  },
  gems: {
    title: "Gems & Minerals",
    description: "You match best with Gems & Minerals. It fits visitors who want something beautiful, colorful, calm, and photo-worthy.",
    plan: "Begin with Gems & Minerals, then visit Space Odyssey, then stop by the gift shop for a relaxed museum route."
  },
  animals: {
    title: "Wildlife Exhibits",
    description: "You match best with the wildlife and nature exhibits. It fits visitors who like animals, ecosystems, nature, and real-world science.",
    plan: "Start with wildlife exhibits, continue into nature and earth science areas, then choose an IMAX nature movie."
  }
};

function startQuiz() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestion];

  document.getElementById("questionNumber").innerText =
    "Question " + (currentQuestion + 1) + " of " + questions.length;

  document.getElementById("questionText").innerText = question.text;

  document.getElementById("progressBar").style.width =
    ((currentQuestion) / questions.length) * 100 + "%";

  const answerButtons = document.getElementById("answerButtons");
  answerButtons.innerHTML = "";

  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.onclick = function() {
      selectAnswer(answer.type);
    };
    answerButtons.appendChild(button);
  });
}

function selectAnswer(type) {
  scores[type]++;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  let bestMatch = "space";
  let highestScore = 0;

  for (let type in scores) {
    if (scores[type] > highestScore) {
      highestScore = scores[type];
      bestMatch = type;
    }
  }

  let percent = 86 + highestScore * 3;
  if (percent > 99) percent = 99;

  document.getElementById("matchTitle").innerText = results[bestMatch].title;
  document.getElementById("matchScore").innerText = percent + "% Match";
  document.getElementById("matchDescription").innerText = results[bestMatch].description;
  document.getElementById("visitPlan").innerText = results[bestMatch].plan;
}

function restart() {
  currentQuestion = 0;

  scores = {
    space: 0,
    dinosaurs: 0,
    gems: 0,
    animals: 0,
    health: 0
  };

  document.getElementById("result").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}
