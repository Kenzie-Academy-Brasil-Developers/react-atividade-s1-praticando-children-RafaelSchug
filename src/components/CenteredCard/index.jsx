import './style.css';

export const CenteredCard = ({children}) => {
    return (
        <div className="Container">
            <span>
                {children}
            </span>
        </div>
    )
}