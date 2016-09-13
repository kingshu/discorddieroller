Discord die roller.
===============

---------

# Create a Discord Bot
1. Watch the first 50 seconds of [this video][youtube-tut]. This is where you'll get your token (00:46 in the video). This will be used later.
2. Add the bot to your channel. You will need your Bot ID for this. It can be found right above the token from the previous step. Watch (05:06) in the video.
    a. The URL shown in the video is https://discordapp.com/oauth2/authorize?client_id=YYYYYYYYY&scope=bot&permissions=0
    b. Replace the YYYYYYYYY in the URL with your Bot ID.

------

# Setup
 1. Install [Node.js][nodejs] (needs to be version 6.0.0 or higher)
 2. Clone or Download as zip this repository, unzip it wherever you want to keep it.
 3. Among the unzipped files, find <i class="icon-file"></i> **dieroller.js** and edit it using any editor (Notepad, Notepad++, etc)
     a. Find the line that says `bot.login("your-token-here")` 
     b. Replace it with your token (from [the section above](#create-a-discord-bot])). The new token should be within the quotes, leave them intact.
     c. Save and exit.
 3. Open command prompt:
     a.  Press <kbd>Ctrl + R</kbd>
     b. Type in `cmd`
     c. Press <kbd>Enter</kbd>
 4. Navigate to the directory where you unzipped the repository using `cd path/to/discorddieroller` 
 5. Install the packages using:
```
npm install
``` 

-------

#Run
Still from the command line, still inside the directory, run:
```
node dieroller.js
```

Your bot should be ready to go.

[nodejs]: https://nodejs.org/en/
[youtube-tut]:https://www.youtube.com/watch?v=nxZORz9zx6w