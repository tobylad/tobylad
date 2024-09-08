import './xp.css'

export const Xp: React.FC = () => {
    return (
        <div className="xp-wrapper">
            <div>
                <p>Welcome to my experience section! Feel free to download my current resume below.</p>

                <p>
                    I am currently a Software Engineer with 5 years of professional experience. I was always into computer technology, but never attempted to learn to code until 2017.
                    I was immediately thrilled by the complex problems that I constantly got to solve, and the new ability to create beautiful and meaningful things on the internet.
                    My background as an English teacher gave me a heightened ability to craft stories, whether in code, documentation, or team tasks.
                    My background as a Physical Education teacher and coach gave me deep experience in managing teams and groups of people and a great sense of empathy.
                    Promoted to a Senior-level position within 3 years of full-time employment as an engineer, I had proven that my unique and powerful experiences were invaluable to creating value for those all around me.
                </p>

                <p>
                    Personally, I'm the same tech/game/music nerd I always was. Lately as many others, I have fully immersed myself in this 'next chapter' of AI evolution. 
                    Chat GPT-4, DALL-E, Copilot -- all that good stuff. I'm a big video gamer, and I'm currently hooked on the NBA 2K series and Starfield. I attempt to play several instruments and love a good ol' loud rock concert!
                    I'm also one of this year's new fans to the WNBA. Let's go Dream!
                </p>

                <p>
                    Thanks for stopping by my experience page. If you have any questions or would like to reach out to me regarding software engineering roles, go for it!
                </p>

            </div>

            <div className="download-wrapper">
                <a href="https://tobyladimages.blob.core.windows.net/files/Toby-Ladislas-Resume-09-24-green.pdf" download="tobylad-resume.pdf" tabIndex={-1}>
                    <button className="resume">Download my Resume</button>
                </a>
            </div>
        </div>
    )
}