import {useState} from 'react'

export function TwitterFollowCard({children,userName,initialisFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialisFollowing)
    console.log('[TwitterFollowCard] render with username:', userName)
    //ojo que para la variable se usa apostrofe en vez de comillas
    const imageSrc=`https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
      ? 'tw-followCard-button is-following'
      : 'tw-followCard-button'

    const handleClick =() => {
        setIsFollowing(!isFollowing)
    }

    //const addAt = (username) => `@${userName}`
    //console.log(isFollowing);
    return(
    //<article style={{display: 'flex', alignItems: 'center', color: '#fff'}}>  //usado para react native
    //cada etiqueta de html tiene su identificacion de css del archivo App.css
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            { /*aqui va las notas*/}
            <img className='tw-followCard-avatar'
             alt="El avatar de midudev" src={imageSrc}/> 
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
    </article>    
    )

}