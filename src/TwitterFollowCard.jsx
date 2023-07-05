export function TwitterFollowCard({formatUserName, userName, name, isFollowing}){
    //ojo que para la variable se usa apostrofe en vez de comillas
    const imageSrc=`https://unavatar.io/${userName}`
    //const addAt = (username) => `@${userName}`
    //console.log(isFollowing);
    return(
    //<article style={{display: 'flex', alignItems: 'center', color: '#fff'}}>  //usado para react native
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar'
             alt="El avatar de midudev" src={imageSrc}/> 
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>
        </header>
        <aside>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>
    </article>    
    )

}