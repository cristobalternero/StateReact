import './App.css'

export function App (){
    return(
        <article className='tw-followCard'>                  {/* style={{display: "flex", alignItems: 'center', color: '#fff'}} */}
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="foto1" 
                    src="https://unavatar.io/github/mdo"></img>
                <div className='tw-followCard-info'>
                    <strong>Miguel Contreras</strong>
                    <span className='tw-followCard-infoUserName'>@midudev</span>
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