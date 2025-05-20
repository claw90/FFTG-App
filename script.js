<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vote - FFTG</title>
  <style>
    body {
      margin: 0;
      font-family: 'Arial', sans-serif;
      background: linear-gradient(135deg, #ffe4f1, #fff0f5);
      color: #333;
      text-align: center;
      padding: 50px;
    }

    .container {
      max-width: 600px;
      margin: auto;
    }

    .logo {
      font-size: 3rem;
      margin-bottom: 10px;
    }

    .tagline {
      font-size: 1.1rem;
      margin-bottom: 30px;
      font-style: italic;
    }

    .nav .btn {
      display: block;
      background-color: #fff;
      color: #f69b4;
      padding: 15px;
      margin: 10px auto;
      width: 80%;
      max-width: 300px;
      text-decoration: none;
      font-weight: bold;
      border: 2px solid #f69b4;
      border-radius: 10px;
      transition: 0.3s ease;
      cursor: pointer;
    }

    .nav .btn:hover {
      background-color: #f69b4;
      color: #fff;
      transform: scale(1.05);
    }

    .vote-btn.flash {
      animation: flash 0.4s ease;
    }

    @keyframes flash {
      0% { background-color: #fff; }
      50% { background-color: #f69b4; color: #fff; }
      100% { background-color: #fff; }
    }

    #vote-result {
      margin-top: 20px;
      font-weight: bold;
      color: #f69b4;
    }

    footer {
      margin-top: 40px;
    }

    footer .version {
      font-size: 0.9rem;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="logo">🍴 Vote On Food</h1>
    <p class="tagline">Cast your vote before someone ends up hangry.</p>

    <div class="nav" id="vote-buttons">
      <button class="btn vote-btn" data-choice="Tacos 🌮">Tacos</button>
      <button class="btn vote-btn" data-choice="Sushi 🍣">Sushi</button>
      <button class="btn vote-btn" data-choice="Pizza 🍕">Pizza</button>
      <button class="btn vote-btn" data-choice="Waffle House 🧇">Waffle House</button>
    </div>

    <div id="vote-result"></div>

    <footer>
      <a href="index.html" class="btn" style="margin-top: 20px;">Back to Home</a>
      <p class="version">FFTG v1.0</p>
    </footer>
  </div>

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const voteButtons = document.querySelectorAll(".vote-btn");
      const resultDiv = document.getElementById("vote-result");

      voteButtons.forEach(button => {
        button.addEventListener("click", () => {
          const choice = button.getAttribute("data-choice");
          resultDiv.innerText = `You voted for ${choice}! 🎉`;
          button.classList.add("flash");

          setTimeout(() => button.classList.remove("flash"), 400);
        });
      });
    });
  </script>
</body>
</html>
