import { useState } from 'react'
import About from './components/About'
import AnecdoteList from './components/AnecdoteList'
import CreateNew from './components/CreateNew'
import Footer from './components/Footer'
import { Routes, Route, Link, useMatch } from 'react-router-dom'
import Anecdote from './components/Anecdote'
import Notification from './components/Notification'

const Menu = () => {
    const padding = {
        paddingRight: 5
    }
    return (
        <div>
            <Link to='/' style={padding}>anecdotes</Link>
            <Link to='/create' style={padding}>create new</Link>
            <Link to='/about' style={padding}>about</Link>
        </div>
    )
}

const App = () => {
    const [anecdotes, setAnecdotes] = useState([
        {
            content: 'If it hurts, do it more often',
            author: 'Jez Humble',
            info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
            votes: 0,
            id: 1
        },
        {
            content: 'Premature optimization is the root of all evil',
            author: 'Donald Knuth',
            info: 'http://wiki.c2.com/?PrematureOptimization',
            votes: 0,
            id: 2
        }
    ])

    const [notification, setNotification] = useState('')

    const match = useMatch('/anecdotes/:id')
    const anecdote = match ? anecdotes.find(a => a.id === Number(match.params.id)) : null

    const showNotification = (notification, time) => {
        setNotification(notification)
        setTimeout(() => setNotification(''), time)
    }

    const addNew = (anecdote) => {
        anecdote.id = Math.round(Math.random() * 10000)
        setAnecdotes(anecdotes.concat(anecdote))
    }

    return (
        <div>
            <h1>Software anecdotes</h1>
            <Menu />
            <Notification notification={notification}></Notification>
            <Routes>
                <Route path='/' element={<AnecdoteList anecdotes={anecdotes} />} />
                <Route path='/anecdotes/:id' element={<Anecdote anecdote={anecdote} />} />
                <Route path='/about' element={<About/>} />
                <Route path='/create' element={<CreateNew addNew={addNew} showNotification={showNotification} />} />
            </Routes>
            
            <Footer />
        </div>
    )
}

export default App
