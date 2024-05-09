'use client'

import { useAudioPlayer } from "../hooks/useAudioPlayer";
import conversation from '../../../public/data/conversation.json'
import SvgSpeaker from "../Icons/Speaker";
import { Mensaje } from "./Mensaje";

type talkProps = {
  content: string,
  startTime: number,
  endTime: number,
  role: string
}

export const Audio = () => {
    
    const { currentTime, goToTime, isPlaying, audioRef } = useAudioPlayer();

    const userArray: talkProps[] = []
    const agentArray: talkProps[] = []

    const conversationArray = conversation.conversation

    conversationArray.map(talk =>{
        if(talk.role === 'user'){
            let user = {
                content: talk.content , 
                startTime: talk.start,
                endTime: talk.end,
                role: talk.role
            }
            userArray.push(user)
        }
        else{
            let agent = {
                content: talk.content , 
                startTime: talk.start,
                endTime: talk.end,
                role: talk.role
            }
            agentArray.push(agent)
        }
    })
     
  return (
    <div className="text-lg ">
      <div className='lg:hidden mx-auto w-[85%] h-[475px] overflow-scroll bg-[#ffffffa0] rounded-xl'>
          {conversationArray.map(({end, start, content, role} )=>(
            <Mensaje key={end} end={end} start={start} content={content} role={role} goToTime={goToTime} currentTime={currentTime}/>
              ))}
      </div>
      <div 
      className='hidden lg:flex space-x-[5%] max-h-[580px] overflow-scroll mt-2'>
        <div className='lg:w-[40%] lg:ml-[5%]'>
          {agentArray.map(({endTime, startTime, content,role} )=>(
            <Mensaje key={endTime} end={endTime} start={startTime} content={content} role={role} goToTime={goToTime} currentTime={currentTime}/>
              ))}
        </div>
        <div className='lg:w-[40%]'>
          {userArray.map(({endTime, startTime, content, role} )=>(
            <div className="mt-14" key={endTime}>
              <Mensaje key={endTime} end={endTime} start={startTime} content={content} role={role} goToTime={goToTime} currentTime={currentTime}/>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <audio ref={audioRef} className="lg:mt-[1%] mt-[5%] lg:w-[75%]" controls>
            <source src="/audio/call.wav" type="audio/wav" />
        </audio>  
      </div>
    </div>
  )
}
