import locationIcon from '@iconify/icons-mdi/fire-alert';
import {Icon} from '@iconify/react'

export const Header = () => {
    return (
        <header className="header">
            <h1> <Icon icon = {locationIcon}/>Wilfire Tracker (Powered By NASA)</h1>
        </header>
    )
}
