import './side-projects.css'
import { Link } from 'react-router-dom'

export const SideProjects: React.FC = () => {
    return (
        <div className="side-projects">
            <div className="side-projects-header">
                <div className="side-projects-name">Toby Ladislas</div>
                <div className="side-projects-title">Side Projects</div>
            </div>

            <div className="side-projects-body">
                <div className="project-cell">
                    <p key="retro-weather"><Link to="/retro-weather">Retro Weather</Link></p>
                </div>

                <div className="project-cell">
                    <p key="paul-turbo"><a href="https://github.com/tobylad/paul-turbo" target="_blank">paul-turbo</a></p>
                </div>
            </div>
        </div>
    )
}