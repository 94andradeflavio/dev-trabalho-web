import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/auth'

import Nav from './Nav'
import Clients from './Clients'
import Check from './Check'

import { getClients, getClientsDecript } from '../../services/api'

import "./styles.css"

const MainPage = () => {
    const { logout } = useContext(AuthContext)
    const [clients, setClients] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingError, setLoadingError] = useState(false)
    const [checked, setChecked] = useState(true)

    const loadClients = async () => {
        try {
            const response = await getClients()
            setClients(response.data)
            setLoading(false)
        } catch (err) {
            console.error(err)
            setLoadingError(true)
        }
    }

    const loadClientsDecript = async () => {
        try {
            const response = await getClientsDecript()
            setClients(response.data)
            setLoading(false)
        } catch (err) {
            console.error(err)
            setLoadingError(true)
        }
    }

    useEffect(() => {
        (async () => await loadClients())()
        // eslint-disable-next-line
    }, [])

    const handleChecked = () => setChecked(!checked)
    useEffect(() => {
        if(checked) {
            (async () => await loadClients())()
        } else {
            (async () => await loadClientsDecript())()
        }
        // eslint-disable-next-line
    }, [checked])


    const handleLogout = () => logout()


    if(loadingError) {
        return (
            <div className="loading">
                Erro ao carregar os dados da lista. <Link to="/login">Voltar</Link>
            </div>
        )
    }

    if(loading) {
        return (
            <div className="loading">
                Carregando...
            </div>
        )
    }

    return (
        <div id="main">
            <Nav onLogout={handleLogout} />
            
            <Clients clients={clients} crypto={checked}>
                <Check  
                    value={checked}
                    onCheck={handleChecked} />
            </Clients>
        </div>
    )
}

export default MainPage