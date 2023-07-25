import './App.css'
import { useState  } from 'react';

export function TwFollowCard({ children, formatUser, userName= 'desconocido', initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const imgSrc=`https://unavatar.io/${userName}`;
    const text = isFollowing ? 'siguiendo' : 'seguir';
    const buttonClassName = isFollowing ? 
    'tw-button-seguir is-following' : 'tw-button-seguir';

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                src={imgSrc}
                alt="avatar"
                />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">{formatUser(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <samp className='tw-followCard-text'>{text}</samp>
                    <samp className='tw-followCard-stopFollow'>Dejar de seguir</samp>
                </button>
            </aside>
        </article>
    )
}