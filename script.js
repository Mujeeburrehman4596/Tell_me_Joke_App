document.getElementById('jokeBtn').addEventListener('click', function() {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the bicycle fall over? Because it was two-tired!",
        "Why don't skeletons fight each other? They don't have the guts.",
        "What do you get when you cross a snowman and a vampire? Frostbite.",
          "Why was the student's report card wet? It was below sea level.",
           "Why did the soccer ball quit the team? It was tired of being kicked around.",
            "Why did the baker go to therapy? He kneaded to talk.",
           "Why don't sharks eat clowns? Because they taste funny.",
         "Why did the bicycle stand up by itself? It was two-tired.",
            "Why did the grape stop in the middle of the road? It ran out of juice.",
           "Why was the cat sitting on the computer? It wanted to keep an eye on the mouse.",
"Why do bees have sticky hair? Because they use honeycombs.",
"Why did the golfer bring an extra pair of socks? In case he got a hole in one.",
"Why don't melons get married? Because they cantaloupe.",
"Why did the pirate go to school? To improve his arrrr-ticulation!",
"Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels!",
"Why did the calendar get arrested? It had too many dates.",
"Why don't bananas ever get lonely? Because they hang out in bunches!",
"Why did the skeleton go to the party alone? Because he had no body to go with.",
"Why did the farmer win an award? He was outstanding in his field.",
"Why don't you ever see pigs hiding in trees? Because they're good at playing ",
"Why did the music teacher need a ladder? To reach the high notes!",
"Why do cows wear bells? Because their horns don't work.",
"Why was the big cat disqualified from the race? Because it was a cheetah.",
"Why don't bakers work in the winter? Because it's too cold to rise.",
"Why did the bird go to the hospital? It needed tweetment.",
"Why did the pencil cross the road? It wanted to draw many problems.",
    ];

    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById('joke').innerText = jokes[randomIndex];
});
