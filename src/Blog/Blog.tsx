import React from 'react';
import './blog.css';

export const Blog: React.FC = () => {
    return (
        <>
            <div className="site-header">
                <div className="site-header-name">Toby Ladislas</div>
                <div className="site-header-title">Side Projects</div>
            </div>
            <div className="site-body">
                <div>
                    <h1>Welcome to My Blog!</h1>
                    <p>
                        Howdy! Toby here. As of now this blog is pretty barebones, but I just wanted to 
                        share some thoughts about a project I just worked on, so it'll do. Later on I'll
                        add some functionality to persist these posts, add date filtering, and add a way
                        for me to add new posts right here on the site.

                        For now just want to share some thoughts!
                    </p>
                </div>

                <div>
                    <h2>January 6, 2025 2:13 a.m.</h2>

                    <p>
                        So here I am, burning the midnight oil yet again. Been going without external structure
                        for over a year now, and I always seem to default to being awake now. It's a low-key
                        underrated time for focusing down on things.
                    </p>

                    <p>
                        Anyway, welcome! This is the first post! So on LinkedIn, I recently made a commitment of sorts
                        that will hopefully help my self-accountability and motivation. When I come up with cool project
                        ideas, I'm going to talk about them a bit, and make it sound like I'll be creating it within a
                        short time period after. Last week, the first committed project came up. Check it out <a target="_blank" href="https://www.linkedin.com/posts/toby-ladislas_ok-so-as-promised-im-posting-ideas-i-want-activity-7281374415441784833-Wd6T?utm_source=share&utm_medium=member_desktop">here</a>.
                    </p>

                    <p>
                        It's a TV app! An exciting employment opportunity I'm checking out at the moment had me look into 
                        some new technologies I've never used before, so I thought it would be fun to try to build something.
                        Just launched a simple MVP - code <a target="_blank" href="https://github.com/tobylad/paul-turbo">here</a>.
                        The app uses Lightning.js to create an HTML Canvas element that displays some content and animations on the 
                        TV screen. What I ended up with for an MVP/POC is a painfully simple app that displays a couple movie titles 
                        and allows for interactivity with the TV's remote control. I don't want to post the demo on LinkedIn yet as 
                        it's 2:30 in the morning, so not really wanting to blow up any phones at the moment, plus I had mentioned in 
                        my post that my deadline is 10:30 a.m. Monday, so I'll kind of adhere to that I guess.
                    </p>

                    <p>
                        Ok let's talk about the app now! First of all, it was really interesting to work on a web application but
                        with no CSS and no DOM element interactivity, like what's common in React, Angular, Vanilla, etc. All the tips
                        and tricks I've picked up over the years with DOM and the CSS were virtually obsolete. Really made me appreciate
                        how websites are put together these days, and some of the amazing stuff you can do with them so easily.
                        What I put together with Lightning.js and Canvas would have taken me all of 10 minutes using the tech stack I'm
                        using on this site right now. If you saw the demo, all you can do with the app right now is click "left" or "right"
                        on a remote control, and that input will trigger an animation on one of the two items there. Clicking left animates
                        the left one, and clicking right animates the right one.
                    </p>

                    <p>
                        I want to take a minute to talk about an important thing I've learned throughout my years as software dev: Iterating.
                        My scope for this MVP was intially larger. I wanted to do more. But due to my LinkedIn deadline, I thought it might
                        be better to make sure I can get something "live". Live is in quotes because users can't exactly navigate to this thing
                        and just use it. If you want to use my app at the moment you'd have to pull my code, install necessary dependencies,
                        set up developer mode on an LG TV, and use the LG Developer SDK to get the app running. Since this was a process I had
                        never done before, I decided to make the goals of the application itself very simple: 1. Display some content. 2. Allow
                        animations to be triggered by a TV remote control. Now that I know how to run the app and can make 
                        demos to show off, at least I can prove that I have the ability to get something like this up and running, at the very
                        least. And I mean, it's not bad for less than 2 days using technologies I've never used before - I started this
                        yesterday morning. A bulk of the work got done tonight though - I found a good rhythm and locked in. YouTube concerts
                        definitely helped. I usually check out old shows of my favorite bands. I'm cycling through a couple right now - The 
                        Police Gateshead '82, Genesis Invisible Touch Live '87 at Wembley Stadium, and Porcupine Tree Live at the Garage 1996'. Did 
                        you need to know all that? Nah. But it's a blog post - might as well ramble a tad. And now you know I like English rock bands.
                    </p>
                        
                    <p>
                        But - iterating! There's already a ton more stuff I want to add, and I can go ahead and add that throughout the week. 
                        If you check out the Github repo, I've added some Chat GPT-generated user stories that I will try to implement next. 
                        At the very least though, I'd like to have this a little more fleshed out. What I wanted to intitally complete by
                        Monday morning was the ability to click through a group of 2+ items, and to press 'enter' on the remote to open up a
                        show page with more information on the selected item. I'm glad I was able to find some content for it that's kind of 
                        relevant - I went with movies from the Fast and Furious franchise. I'm a pretty big fan of the movies, notably the ones
                        with Paul Walker in them, so I fittingly called the app paul-turbo. So in the end, this app would be pretty similar to 
                        a streaming service, just without the ability to actually play the movie. It will just provide information about the film
                        like the actors in it, runtime, year, title, etc. Just adding those in will definitely teach me a lot more about this cool
                        new tech I picked up. It would be great to be able to show it off a little easier too - I understand not everyone is
                        comfortable in a terminal, so it would be nice to just upload it to a store or something. According to the Lightning.js
                        docs, that's actually what it looked like I'd be doing at first - using a service called Metrological. However, once I got 
                        signed up and everything, I got blocked at the 'submit' stage. I used a CLI to upload the app and all that, but there's 
                        really no option to submit. While resarching this the past few days, I also knew of another way to get the app on a TV, 
                        using webOS developer tools. LG actually has a pretty killer developer experience. And Lightning.js pretty much lived up 
                        to its claim to "build once". The only thing I needed to add once getting my TV setup in dev mode was a JSON file.
                        Everything else was through the terminal.
                    </p>

                    <p>
                        Well, ok! Porcupine Tree Live 2005 at Rockaplast just wrapped up, so I think it's a good stopping point. More iterations 
                        to come on paul-turbo, and more blog posts to come here on my site! Thanks for reading and hit me up on LinkedIn anytime 
                        if you want to chat about tech, music, or anything else!
                    </p>
                </div>
            </div>
        </>
    );
}