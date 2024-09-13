import './breakfast.css'
import { BreakfastMain } from './BreakfastMain/BreakfastMain';

export const Breakfast: React.FC = () => {
    return (
        <>
            <p className="disclaimer">Breakfast of Champions is a web-based game pitting popular cereal characters against one another. Development being worked on weekend of 9/14/24!</p>
            <BreakfastMain />
        </>
    )
}

