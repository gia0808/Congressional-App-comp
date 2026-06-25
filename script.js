body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #06172e, #0a2e5d);
  color: white;
  text-align: center;
}

section {
  min-height: 100vh;
  padding: 80px 20px;
}

h1 {
  font-size: 70px;
  margin-bottom: 10px;
}

h2 {
  font-size: 42px;
}

p {
  font-size: 24px;
  color: #d9e6f2;
}

button {
  margin: 15px;
  padding: 18px 32px;
  font-size: 20px;
  border: none;
  border-radius: 18px;
  background: white;
  color: #0a2e5d;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

button:hover {
  transform: scale(1.05);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.hidden {
  display: none;
}

#recommendation {
  background: white;
  color: #0a2e5d;
  max-width: 500px;
  margin: 30px auto;
  padding: 30px;
  border-radius: 25px;
  font-size: 22px;
}
