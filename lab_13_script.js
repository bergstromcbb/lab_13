	var app = angular.module("sixYearOld", []); 

	app.controller('sixyearController', function($scope){

	var	words = ['Detroit', 'Chicago', 'Paris', 'London', 'Athens', 'Atlanta', 'Berlin', 'Miami', 'Cairo', 'Tokyo'];
	var	wordsDec = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
	var	moreWords = ['Belle Isle', 'Navy Pier', 'Eiffel Tower', 'London Bridge', 'The Parthenon', 'Great Pyramids', 'London Eye', 'South Beach', 'Berlin Wall', 'Tokyo Imperial Palace'];
		// $scope.moreWordsDec = ['six', 'seven', 'eight', 'nine', 'ten'];
		$scope.newWords = [];


		$scope.addWords=function() {
			var word={};
			word.stuffing=words[Math.floor(Math.random() * words.length)];
			// word.deco="";
			$scope.newWords.push(word);
			console.log(word);

		};

		$scope.addWordsDec=function() {
			var word={};
			word.stuffing=words[Math.floor(Math.random() * wordsDec.length)];
			word.deco=wordsDec[Math.floor(Math.random() * wordsDec.length)];
			$scope.newWords.push(word);
			console.log(word);

		};

		$scope.addMoreWords=function() {
			var word={};
			word.stuffing=moreWords[Math.floor(Math.random() * moreWords.length)];
			// word.deco="";
			$scope.newWords.push(word);
			console.log(word);

		};

		$scope.addMoreWordsDec=function() {
			var word={};
			word.stuffing=moreWords[Math.floor(Math.random() * wordsDec.length)];
			word.deco=wordsDec[Math.floor(Math.random() * wordsDec.length)];
			$scope.newWords.push(word);	
			console.log(word);

		};


	});


// var randNum, finalWord;
//     randNum = Math.floor(Math.random() * gameWordArray.length);
//     finalWord = gameWordArray[randNum];
//     return finalWord;


// var getRandomWord = function () {
//     return words[Math.floor(Math.random() * words.length)];
// };
//   $scope. = function(){
// var item={};
//  show = words[Math.floor(Math.random() * words.length)];
//   	 word.something = $scope.chores.push(pickWord);	
//   	$scope.pickWord = "";
//   };

  // $scope.removeChore = function(chore){
  // 	var index = $scope.chores.indexOf(chore);	
  // 	$scope.chores.splice(index, 1);

  // };
