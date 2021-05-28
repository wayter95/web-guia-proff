import { useContext } from 'react'
import RobotHead from '../../assets/images/robot-head.svg'
import SessionContext from '../../contexts/session'
import Api from '../../services/api'

import './styles.css'
const Session = () => {
    const { session, setSession } = useContext(SessionContext)
    async function handleSubmit() {
        const create = await Api.get('/create')
        try {
            setSession(create.data.sessionId)
        } catch (error) { }
    }

    return (
        <div id="session">
            {
                !session &&
                <div className="session-off">
                    <span>Iniciar sessão</span>
                    <button className="button-session" onClick={() => handleSubmit()}>INICIAR</button>
                </div>
            }
            {
                session &&
                <div className="session-on">
                    <img src={RobotHead} alt="Session On" />
                    <h1>Você esta conversando com o <span>Gui</span></h1>
                </div>
            }
        </div>
    )
}

export default Session