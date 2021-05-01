  var flashcard = document.getElementById('flashcard');
	var prev = document.querySelector('#prev');
	var flip = document.querySelector('#flip');
	var next = document.querySelector('#next');
		
        /*Change the questions to whatever you want! Remember to stick to the theme of music this month.*/
		var questions=[
			"What is the highest mountain above sea level?",
			"Question 2?",
			"Question 3?",
			"Question 4?",
			"Question 5?",
			"Question 6?"
		];
		
		var images=[
			"https://upload.wikimedia.org/wikipedia/commons/f/f6/Everest_kalapatthar.jpg",
			"",
			"",
			"",
			"",
			""
		];
		
		var answers=[
			"Mount Everest",
			"Answer 2",
			"Answer 3",
			"Answer 4",
			"Answer 5",
			"Answer 6"
		];

		var currentText = questions[0];
		var questionNumber = 0;
		var cardState = 0;
		/*!-- 0 indicates the front question side and 1 indicates the back answer side*/

		updateFront();
		updateBack();

		function flipCard()
		{
			if(cardState==0){
				currentText = answers[questionNumber];
				cardState++;
				updateBack();
			}
			
			else{
				currentText = questions[questionNumber];
				cardState--;
				updateFront();
			}
		}
		
		function nextCard()
		{
			var length = questions.length;

			if(questionNumber<length-1)
				questionNumber++;
			else
				questionNumber=0;
			
			if(cardState==0){
				currentText = questions[questionNumber];
				updateFront();
			}
			else{
				flipCard();
				flashcard.classList.toggle('flipped');
				updateText();
			}

		}
		
		function previousCard()
		{
			var length = questions.length;
			if(questionNumber>0)
				questionNumber--;
			else
				questionNumber=length-1;
			
			if(cardState==0){
				currentText = questions[questionNumber];
				updateFront();
			}
			else{
				flipCard();
				flashcard.classList.toggle('flipped');
				updateText();
			}
		}
		
		/*Updates the text shown on the flashcard after a button press.*/
		function updateFront(){
			document.getElementById("flashcard-content-front").innerHTML = currentText;
			
		}
		function updateBack(){
			document.getElementById("flashcard-content-back").innerHTML = currentText;
			document.getElementById("card-image").src = images[questionNumber];
		}
		
		flip.addEventListener('click', flipCard);
		prev.addEventListener('click', previousCard);
		next.addEventListener('click', nextCard);
		
		flip.addEventListener('click', function() {
			flashcard.classList.toggle('flipped');
			updateText();
		}, false);