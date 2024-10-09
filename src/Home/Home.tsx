import './home.css'

export const Home: React.FC = () => {
    return (
        <>
            <div className="xp-wrapper">
                <div>
                    <p>
                        Hey there! I'm Toby, an experienced software engineer from Atlanta! I specialize in building high-quality, feature-rich applications using modern frameworks and tools with a strong focus on efficiency. I have a proven ability to deliver robust solutions quickly while maintaining high standards of code quality and user experience.
                    </p>

                    <p>
                        As part of a software development team, I am known as a thorough, highly detail-oriented problem solver and a creative out-of-the-box thinker with no fear of failing fast.
                    </p>

                    <p>
                    As a frontend engineer I see through all parts of the product lifecycle of a frontend web app, including but not limited to: Diagramming, architecting, assisting in accessibility (A11y) design, coding, pair programming, code reviews, code deployment, monitoring, analytics, and data-driven decision making.
                    </p>

                    <p>
                    I am highly driven by the challenges software engineers face every day, and constantly striving to make all of it better. Thanks for stopping by my experience page. If you have any questions or would like to reach out to me regarding software engineering roles, check out my resume for contact info!
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