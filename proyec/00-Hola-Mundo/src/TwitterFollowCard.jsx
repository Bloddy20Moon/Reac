export function TwitterFollowCard({userName, name, isFollowing}){
    const imageSrc = 'https://unavatar.io/{userName}'
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-Header'>

           <img className='tw-followCard-Avatar' src={imageSrc} alt="El Avatar de Midudev" />
           <div className='tw-followCard-Info'>
            <strong>{name}</strong>
            <span className='tw-followCard-InfoUsername'>@{userName}</span>
           </div>
        </header>

        <aside>
            <button className='tw-followCard-Button'>Siguientew</button>
        </aside>
    </article>
    )
}