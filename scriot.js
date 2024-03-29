function OpeningCeremony(callback) {
    setTimeout(() => {
        console.log("Let the games begin");
        let score = { red: 0, blue: 0, green: 0, yellow: 0 };
        console.log("Previous score:", score);
        callback(score, callback);
    }, 1000);
}

function Race100M(score, callback) {
    setTimeout(() => {
        const times = {
            red: Math.floor(Math.random() * 6) + 10,
            blue: Math.floor(Math.random() * 6) + 10,
            green: Math.floor(Math.random() * 6) + 10,
            yellow: Math.floor(Math.random() * 6) + 10,
        };

        const sortedColor = Object.keys(times).sort((a, b) => times[a] - times[b]);
        score[sortedColor[0]] += 50;
        score[sortedColor[1]] += 25;

        console.log("Race 100M Results:");
        console.log("Previous score:", score);
        console.log(times)
        console.log("Updated scores:", score);
        console.log(`${sortedColor[0]} won the Race 100M`);
        
        callback(score, callback);
    }, 3000);
}

function LongJump(score, callback) {
    setTimeout(() => {
        const colors = ['red', 'blue', 'green', 'yellow'];
        const randColor = colors[Math.floor(Math.random() * colors.length)];
        score[randColor] += 150;
        console.log("Long Jump Results:");
        console.log("Previous score:", score);
        console.log(`${randColor} won the Long Jump`);
        console.log("Updated scores:", score);
        callback(score, callback);
    }, 2000);
}

function HighJump(score, callback) {
    setTimeout(() => {
        const userInput = prompt("What colour secured the highest jump? (red/blue/green/yellow)");
        if (userInput === null || userInput === "" || !['red', 'blue', 'green', 'yellow'].includes(userInput.toLowerCase())) {
            console.log("Event was cancelled");
            console.log("Previous score:", score);
            callback(score, callback);
            return;
        }

        score[userInput.toLowerCase()] += 100;

        console.log("High Jump Results:");
        console.log("Previous score:", score);
        console.log(`${userInput} won the High Jump`);
        console.log("Updated scores:", score);

        callback(score, callback);
    }, 1000);
}

function AwardCeremony(scores) {
    console.log("Award Ceremony Results:");
    console.log("Previous score:", scores);
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
}

OpeningCeremony((score, callback) => {
    Race100M(score, (score, callback) => {
        LongJump(score, (score, callback) => {
            HighJump(score, (score, callback) => {
                AwardCeremony(score);
            });
        });
    });
});
