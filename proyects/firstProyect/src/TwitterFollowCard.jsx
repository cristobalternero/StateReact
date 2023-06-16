export function TwitterFollowCard ({ userName, name, isFollowing }){
    /* const imageSrc = `https://unavatar.io/${userName}`  === las dos opciones sirven*/
    return(
        <article className='tw-followCard'>                
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="foto1" 
                    src= {`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
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