import { ChatEngine } from 'react-chat-engine'
import './App.css'
import {sc} from './sc'

import React from 'react'

const App = () => {
    return (
        <ChatEngine
        height ='100vh' 
        projectID={sc.projectID}
        userName={sc.userName}
        userSecret={sc.userSecret}
        />
        
    )
}

export default App

