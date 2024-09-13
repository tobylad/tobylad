import './home.css'

export const Home: React.FC = () => {
    return (
        <>
            <div className="xp-wrapper">
                <div>
                    <p>Welcome to my website! Feel free to download my current resume below.</p>

                    <p>
                        I am currently a Software Engineer with 5 years of professional experience. I was always into computer technology, but never attempted to learn to code until 2017.
                        I was immediately thrilled by the complex problems that I constantly got to solve, and the new ability to create beautiful and meaningful things on the internet.
                        My background as an English teacher gave me a heightened ability to craft stories, whether in code, documentation, or team tasks.
                        My background as a Physical Education teacher and coach gave me deep experience in managing teams and groups of people and a great sense of empathy.
                        What has always remained throughout both careers, however, is my ability to problem-solve. If I don't know enough about something, I'll learn it and I'll learn it fast.
                        I am open and willing to cross-train on multiple technologies, and have done this throughout my teaching and sales careers as well, substitute teaching in many different subject areas and making sales in multiple departments.
                        My affinity to rapidly learn, adapt to any situation, along with 5 years of pro experience and one career already completed, makes me a valuable asset to any team.
                    </p>

                    <p>
                        Personally, I'm the same tech/game/music nerd I always was. Lately as many others, I have fully immersed myself in this 'next chapter' of AI evolution. 
                        Chat GPT-4, DALL-E, and Copilot. I'm a video gamer, and I'm currently playing Starfield! I also attempt to play several instruments and love a good loud rock concert!
                    </p>

                    <p>
                        Thanks for stopping by my experience page. If you have any questions or would like to reach out to me regarding software engineering roles, check out my resume for contact info!
                    </p>

                </div>
            </div>

            <div className="download-wrapper">
                <a href="https://tobyladimages.blob.core.windows.net/files/Toby-Ladislas-Resume-09-24-green.pdf" download="tobylad-resume.pdf" tabIndex={-1}>
                    <button className="resume">Download my Resume</button>
                </a>
            </div>
        </>
    )
}