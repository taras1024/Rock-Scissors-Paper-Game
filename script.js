//Rock Papper Scissors Game
function rspGame (yourChoice) {
    var humanChoice = yourChoice.id;
    var botChoice = randomBotChoice();
    var fMessage = finalMessage(whoWin(humanChoice, botChoice));
    rspFrontEnd(humanChoice, botChoice, fMessage);
}
    

function randomBotChoice () {
    return ['rock', 'scissors','paper'][Math.floor(Math.random()*3)];
}


function whoWin(humanChoice, botChoice) {
    var rspGameMatrix = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0}
    };

    var yourScore = rspGameMatrix[humanChoice][botChoice];
    var botScore = rspGameMatrix[botChoice][humanChoice];

    return [yourScore, botScore];
}


function finalMessage ([yourScore, botScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    }
    else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};        
    }
    else {
        return {'message': 'You won!', 'color': 'green'};
    }
}


function rspFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDataBase = {
        'rock': document.getElementById('rock').src,
        'scissors': document.getElementById('scissors').src,
        'paper': document.getElementById('paper').src
    };

    document.getElementById('rock').remove();
    document.getElementById('scissors').remove();
    document.getElementById('paper').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDataBase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 223, 1);'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDataBase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

    document.getElementById('flex-box-rsp-div').appendChild(humanDiv);
    document.getElementById('flex-box-rsp-div').appendChild(messageDiv);
    document.getElementById('flex-box-rsp-div').appendChild(botDiv);

}