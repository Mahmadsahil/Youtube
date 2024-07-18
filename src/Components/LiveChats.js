import React, { useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../utils/ChatSlice';
import { randomNameGenerate, randomSentenceGenerate } from '../utils/helper';
import { useState } from 'react';

const LiveChats = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.message);

    const [ChatValue, setChatValue] = useState();

    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(
                addChat({
                    name: randomNameGenerate(),
                    message: randomSentenceGenerate(),
                })
            );
        }, 1500);

        return () => clearInterval(intervalId);
    }, [dispatch]);

    const handleSubmit = () => {
        dispatch(
            addChat({
                name: "MD Sahil",
                message: ChatValue,
            }))
        setChatValue("")
    }

    return (
        <div className='rounded-lg border border-black  my-4 md:my-0 '>

            <div className=' h-[475px] flex flex-col-reverse gap-2 md:gap-0 px-2 overflow-y-scroll'>
                {chatMessages.map((chat, index) => (
                    <ChatMessage key={index} name={chat.name} message={chat.message} />
                ))}
            </div>

            <form className="flex justify-between gap-1 p-2" onSubmit={(e) => e.preventDefault()}>
                <input className='w-full p-1 px-2 bordere bg-gray-200 rounded-md outline-none' value={ChatValue} placeholder='Chat here...'
                    onChange={(e) => setChatValue(e.target.value)}></input>
                <button className='px-2 text-white bg-blue-600 rounded-lg' onClick={handleSubmit}>Send</button>
            </form>
            
        </div>
    );
};

export default LiveChats;
