import { useState } from 'react';
import './toy-story-gpt.css'
import { FaHamburger } from 'react-icons/fa'

export const ToyStoryGpt: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        // To be filled in later
        console.log('input value:', event.target.value)
    };

    return (
        <div>
            <h1>Ask Toy Story</h1>
            <div className="toy-gpt-container">
                <input
                    type="text"
                    className="toy-gpt-text"
                    value={inputValue}
                    onChange={inputOnChange}
                />

                <button className="toy-gpt-button">
                    <FaHamburger />
                </button>
            </div>
        </div>
    )
}