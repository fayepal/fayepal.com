---
title: How to create a simple raffle draw in JavaScript
date: "2020-03-14T12:12:03.284Z"
description: "A straightforward tutorial on how to create the simplest ever raffle on the Internet using JavaScript"
---

This is a no frills example of how to make a simple raffle draw in JS using `math.Random()`.

## JS

Here I called it `prompts` because I was working on a conversation prompt. I named the file `raffle.js`

```JavaScript
const prompts = [
    'Raffle Item 1 here'
    'Raffle Item 2 here'
    'Just add stuff per line'
];

const total = prompts.length;
const btn = document.getElementById('roll');
const promptDisplay = document.getElementById('prompt');
const raffle = function() {    
    const generatedRandomNumber = Math.floor(Math.random() * total);
    promptDisplay.textContent = prompts[generatedRandomNumber];
}
btn.addEventListener('click', raffle)
```

## HTML

```HTML
<html>
<head>
   <title>My Conversation Prompt</title>
</head>
<body>
  <a href="#" id="roll">Select</a>
  <div id="prompt"></div>
</body>
<script src="raffle.js"></script>
</html>
```

Save them of course in the same folder, open the HTML file on your browser and honey, you're done!

Now time to build stuff on top of it!
