import React from 'react'
import Twitch from 'react-twitch-embed-video'

/* This component allows for viewing of chosen stream */

function Channel({location}) { 

    const channel = location.state.channelID

    return(
        <div className='body'>
            <div id='twitch-embed'>
                <Twitch channel={channel} height={720} width={1300} theme='dark'/>
            </div>
        </div>
    )
}

export default Channel