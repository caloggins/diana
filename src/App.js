import React from 'react'
import './App.css'
import { Container } from '@material-ui/core'
import QueuesPage from './queues/Page'

function App() {
    return (
        <div className="App">
            <Container maxWidth="md">
                <QueuesPage />
            </Container>
        </div>
    )
}

export default App
