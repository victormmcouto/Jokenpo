      const score = JSON.parse(localStorage.getItem('score')) || 
                    {
                      wins: 0,
                      losses: 0,
                      ties: 0
                    }

      function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;

        showScore();
      }

      function computerChoice() {
        random = Math.random();

        if (random <= 0.3) {
          return 'Rock';
        } else if (random > 0.3 && random <= 0.6) {
          return 'Paper';
        } else {
          return 'Scissors';
        }
      }

      function match(myChoice, computerChoice) {
        if (computerChoice === myChoice) {
          result = 'Tie!';
          score.ties += 1;
        } else if ((myChoice === 'Rock' && computerChoice === 'Paper') ||
                   (myChoice === 'Paper' && computerChoice === 'Scissors') ||
                   (myChoice === 'Scissors' && computerChoice === 'Rock')) {
          result = 'You Lose!';
          score.losses += 1;
        } else {
          result = 'You Win!';
          score.wins += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));        
        showResult(result);
        showMatch(myChoice, computerChoice);
        showScore();
      }

      function showScore() {
        const {wins, losses, ties} = score;
        const scoreElement = document.body.querySelector('.js-score');
        scoreElement.innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
      }

      function showResult(result) {
        const resultElement = document.body.querySelector('.js-result');
        resultElement.innerText = result;
      }

      function showMatch(myChoice, computerChoice) {
        const statusElement = document.body.querySelector('.js-match');
        statusElement.innerHTML = `You 
        <img src="./assets/${myChoice}-emoji.png"
             class="move-icon">
        <img src="./assets/${computerChoice}-emoji.png"
             class="move-icon">
        Computer` ;
      }
 
      showScore();