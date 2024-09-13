import '../breakfast.css';
import { useState } from 'react';
import { PiFireSimpleFill, PiFireSimpleLight } from 'react-icons/pi';

export const BreakfastMain: React.FC = () => {
    const [optionsListClass, setOptionsListClass] = useState<boolean>(true)

    // TODO: Would useEffect make more sense or less?
    const toggleOptionsListClass = (): void => {
        setInterval(() => {
            setOptionsListClass(!optionsListClass)
        }, 1000);
    }

    toggleOptionsListClass()

    // This function should pass up state to Breakfast and switch to the provided screen.
    const startVsMode = () => {
        console.log('Starting VS mode!')
    }

    const testHover = () => {
        // I want the first VS icon flashing if a user is idle.
        // However, if they go to another option with their keyboard OR touch another option on mobile, 
        // I would like to change the flame to just that option and have it be lit up. Hmm cool.
        console.log('testing hover...')
    }

    return (
        <div className="breakfast-main">
            <div className="breakfast-content">
                <h1>Welcome to Breakfast of Champions!</h1>

                <div className="game-options-wrapper">
                    <div className="game-options">
                        <button onClick={() => startVsMode()} onMouseOver={() => testHover()}>
                            <span className={`icon ${optionsListClass ? 'icon-on' : ''}`}>
                                { optionsListClass && 
                                    <PiFireSimpleFill />
                                }

                                { !optionsListClass &&
                                    <PiFireSimpleLight />
                                }
                            </span>
                            <span className="option-list-name">
                                VS MODE
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}