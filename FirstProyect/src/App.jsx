import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'Fernand',
        name: 'Fernand Pellin',
        isFollowing: true
    },
    {
        userName: 'Pablo',
        name: 'Pablo Heraldo',
        isFollowing: false
    },
    {
        userName: 'Benjamin',
        name: 'Benjamin Medina',
        isFollowing: true
    }
]

export function App (){

    return (
        <section className='App'>
            {
                users.map(user => {
                    const {userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}    /* Identificador unico para el elemento MUY IMPORTANTE, PODRIA SER EL ID DEL OBJETO DE SQL */
                            userName={userName}
                            initialIsFollowing={isFollowing}
                            >
                                {name}  {/* este el children, por eso funciona */}
                        </TwitterFollowCard> 
                    )
                })
            }
        </section>
    )
}