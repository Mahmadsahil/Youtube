import React from 'react'
import { BiSolidUserCircle } from 'react-icons/bi'

const ChatMessage = ({ name, message }) => {
    return (
        <div data-testid="TestChatMessage" className='flex gap-2 items-start md:my-1'>
            <BiSolidUserCircle className='text-2xl md:text-3xl' />
            <p className='font-semibold text-sm md:text-base'>{name}</p>
            <p className='text-xs md:text-sm'>{message}</p>
        </div>
    )
}

export default ChatMessage;