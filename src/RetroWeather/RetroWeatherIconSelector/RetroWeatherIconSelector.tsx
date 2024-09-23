import './retro-weather-icon-selector.css'
import { useState, useEffect } from 'react'
import { 
    WiDaySunny,
    WiRain,
    WiCloudy,
    WiStormShowers,
    WiRainMix,
    WiSnow
} from 'weather-icons-react'
import { PiWarning } from "react-icons/pi";

// https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2

export const RetroWeatherIconSelector: React.FC<RetroWeatherIconSelector> = ({ weatherId }) => {
    const [iconClass, setIconClass] = useState<string>('')

    useEffect(() => {

        if (weatherId >= 200 && weatherId <= 232) setIconClass('storm')
        if (weatherId >= 300 && weatherId <= 321) setIconClass('drizzle')
        if (weatherId >= 500 && weatherId <= 531) setIconClass('rain')
        if (weatherId >= 600 && weatherId <= 622) setIconClass('snow')
        if (weatherId > 700 && weatherId <= 781) setIconClass('warning')
        if (weatherId === 800) setIconClass('sunny')
        if (weatherId >= 801 && weatherId <= 804) setIconClass('clouds')

    }, [])


    return (
        <>
            { iconClass === "storm" &&
                <WiStormShowers className={iconClass} size={160} color='#010162' />
            }

            { iconClass === "drizzle" &&
                <WiRainMix className={iconClass} size={160} color='#0201A4' />
            }

            { iconClass === "rain" &&
                <WiRain className={iconClass} size={160} color='#0201A4' />
            }

            { iconClass === "snow" &&
                <WiSnow className={iconClass} size={160} color='#c4d4e0' />
            }

            { iconClass === "sunny" && 
                <WiDaySunny className={iconClass} size={160} color='#FF7518' />
            }

            { iconClass === "clouds" &&
                <WiCloudy className={iconClass} size={160} color='#c4d4e0' />
            }

            { iconClass === "warning" &&
                <PiWarning className={iconClass} size={160} color='#F00' />
            }
        </>
    )
}