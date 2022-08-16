import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import botImage from '../images/download.png'
import './Chatbot.css'

function Chatbot(){
    const sendIcon = <FontAwesomeIcon icon={faPaperPlane}/>
    const [incomingHumanMessage, setHumanMessage] = useState('');
    const [messageList, setMesssageList] = useState([]);
    const handleIncomingMessage = event =>{
        setHumanMessage(event.target.value)
    }

    const handleClick = event => {
        var botMessage = "I don't have answer for this query."
        document.querySelector('#input').value = '';
        if(incomingHumanMessage === 'Hi'){
            botMessage = "Hello"
        }
        else if(incomingHumanMessage === 'How are you'){
            botMessage = "I am Fine"
        }
        else if(incomingHumanMessage === 'What is your name'){
            botMessage = "My name is Bot"
        }
        else if(incomingHumanMessage === 'What can you do'){
            botMessage = "I can answer your questions"
        }
        else if(incomingHumanMessage === 'What are you doing'){
            botMessage = "I am Chilling"
        }
        else if(incomingHumanMessage === 'What do you like'){
            botMessage = "I like Chocolates"
        }
        else if(incomingHumanMessage === 'Bye'){
            botMessage = "Bye! Have a nice day."
        }
        setMesssageList([...messageList, {humanMessage : incomingHumanMessage, botMessage: "...typing"}]);
        setTimeout(() => {
            setMesssageList([...messageList, {humanMessage : incomingHumanMessage, botMessage: botMessage}])
        }, 1000)
    }
    return(
        <>
            <div className='App'>
                <div className='wrapper'>
                    <div className='content'>
                        <div className='header'>
                            <div className='img'>
                                <img id='myImage' src={botImage} alt='Bot pic'/>
                            </div>
                            <div className='right'>
                                <div className='name'>ChatBot</div>
                                <div className='status' style={{color: 'green'}}>Active</div>
                            </div>
                        </div>
                        <div className='main'>
                            <div className='main-content'>
                                <div className='messages'>
                                    <ul style={{listStyle: 'none'}}>
                                        {messageList.map((message, i) => (
                                            <>
                                                <li>
                                                    <div className='humanMessages'>{message.humanMessage}</div>
                                                    <div className='botMessages'>{message.botMessage}</div>
                                                </li>
                                            </>
                                        ))}  
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <input className='input' type='text' id='input' placeholder='Enter your message !' onChange={handleIncomingMessage}/>
                    <button className='btn' onClick={handleClick}>{sendIcon}Send</button>
                    {/* <div className='btm'>
                        <div className='input'>
                            <div className='text'>
                                <input type='text' id='input' placeholder='Enter you Message !' onChange={handleIncomingMessage}/>
                            </div>
                            <div className='btn'>
                                <button onClick={handleClick}>
                                    {sendIcon}Send
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Chatbot;