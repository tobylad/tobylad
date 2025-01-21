import './side-projects.css'
import { Link } from 'react-router-dom'

export const SideProjects: React.FC = () => {
    return (
        <div className="side-projects">
            <div className="site-header">
                <div className="site-header-name">Toby Ladislas</div>
                <div className="site-header-title">Side Projects</div>
            </div>

            <div className="site-body side-projects-body">
                <div className="site-cell">
                    <p key="retro-weather"><Link to="/retro-weather">Retro Weather</Link></p>
                </div>

                <div className="site-cell">
                    <p key="paul-turbo"><a href="https://github.com/tobylad/paul-turbo" target="_blank">paul-turbo</a></p>
                </div>

                <div className="site-cell">
                    <p key="toy-story-gpt"><Link to="/ask-toy-story">Ask Toy Story</Link></p>
                </div>
            </div>
        </div>
    )
}