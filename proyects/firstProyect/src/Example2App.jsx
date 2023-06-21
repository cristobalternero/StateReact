import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){

    const format = (userName) => `@${userName}`


    return (
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName="Fernand" 
                name="Fernand Pellin"/>
            <TwitterFollowCard 
                formatUserName={format} 
                initialIsFollowing={true}
                userName="cristobal" 
                name="Cristobal Ternero"/>
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName="nicolas" 
                name="Nicolas Belgentino"/>
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName="pheralb" 
                name="Pablo Hernandez"/>
        </section>
    )
    
}