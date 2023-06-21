
import { useState } from "react" // importar utilidad, HOOKS!!! son la vida

export function TwitterFollowCard ({ children, userName, initialIsFollowing }){
    /* const imageSrc = `https://unavatar.io/${userName}`  === las dos opciones sirven*/

    

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    // #### lo de arriba es quivalente a lo de abajo ####
    // const state = useState(false)    ----- TENEMOS QUE DECIRLE CUAL ES EL VALOR INICIAL DEL ESTADO, POR LO TANTO ES FALSO, (LA LUZ ESTA APAGADA ANTES DE ENCENDERLA, Y ESTO NOS DEVOLVERA DOS ESTADOS...)
    // const isFollowing = state[0]     ----- El valor
    // const setIsFollowing = state[1]  ----- La forma de actualizar, el interruptor.

    console.log(('[App] render with isFollowing: ', isFollowing))

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    

    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'


    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    /* const addAt = (userName) => `@${userName}` */

    return(
        <article className='tw-followCard'>                
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="foto1" 
                    src= {`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>  {/* {addAt(userName)} */}
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}