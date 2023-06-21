import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App (){

    const format = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName="Fernand" 
                name="Fernand Pellin">
            </TwitterFollowCard> 
            <TwitterFollowCard 
                formatUserName={format} 
                initialIsFollowing={true}
                userName="cristobal" 
                name="Cristobal Ternero">
            </TwitterFollowCard> 
        </section>
    )
}