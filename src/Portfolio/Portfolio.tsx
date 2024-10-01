import { useState } from 'react'
import './portfolio.css'
import portfolioData from '../api/portfolio.json'

export const Portfolio: React.FC = () => {
    const [detailsOpen, setDetailsOpen] = useState<boolean>(false)
    const [currentJob, setCurrentJob] = useState<string>('')

    const openDetails = (job: string) => {
        setDetailsOpen(true)
        setCurrentJob(job)
    }
    
    const PortfolioDetails: React.FC<PortfolioDetails> = (details) => {
        return (
            <>
                <h1><a href={ details.url }>{ details.title }</a></h1>
                <p>{ details.xpMessage }</p>
                
                <div className="portfolio-project-list">
                    { details.projectList.map((entry: PortfolioDetailsProjectList, i) => {
                        return (
                            <div key={`xp-${ entry.title }`} className="portfolio-project-list-entry">
                                <div className="entry-overview">
                                    <h2>{ entry.title }</h2>
                                    <p>{ entry.description }</p>
                                </div>

                                <div className="entry-visual">
                                    <a href={ entry.link }>
                                        <img src={ entry.imageUrl } alt="website screenshot" />
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }

    return (
        <>
            <div className="portfolio-header">
                <div className="portfolio-name">Toby Ladislas</div>
                <div className="portfolio-title">Portfolio</div>
            </div>

            <div className={detailsOpen ? 'hide' : 'portfolio-body'}>
                <div className="xp-cell">
                    <div className="cricket-logo" onClick={() => openDetails('cricket')}></div>
                    <p>Cricket Wireless</p>
                </div>

                <div className="xp-cell">
                    <div className="pareto-logo" onClick={() => openDetails('pareto')}></div>
                    <p>Pareto Solutions Group</p>
                </div>

                <div className="xp-cell">
                    <div className="insiten-logo"></div>
                    <p>Insiten</p>
                </div>

                <div className="xp-cell">
                    <div className="capgemini-logo"></div>
                    <p>Capgemini</p>
                </div>
            </div>

            { detailsOpen && 
                <div className="portfolio-details">
                    <button className="details-back" onClick={() => setDetailsOpen(false)}>&#8592;&nbsp;Back</button>

                    <PortfolioDetails 
                        title={ portfolioData[currentJob]?.title }
                        url={ portfolioData[currentJob]?.url }
                        xpMessage={ portfolioData[currentJob]?.xpMessage }
                        projectList= { portfolioData[currentJob]?.projectList }
                    />
                </div>
            }
        </>
    )
}