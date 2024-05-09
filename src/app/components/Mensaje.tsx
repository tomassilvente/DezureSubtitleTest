import SvgSpeaker from "../Icons/Speaker"

type MensajeProps = {
    content: string,
    start: number,
    end: number,
    goToTime: any,
    currentTime: number,
    role:string
  }

export const Mensaje = ({start, end, currentTime, role, goToTime, content}: MensajeProps) => {
  return (
    <div key={start} className={`flex px-2 ${((end > currentTime) && (start < currentTime)) ? 'lg:bg-[#fcfcfc50] rounded-xl lg:border border-[#2f39c2]' : ''}`}>
    <p className={`pt-2 flex lg:space-x-2 ${((end > currentTime) && (start < currentTime)) ? 'opacity-100 font-bold animate-pulse' : 'opacity-0'} ${role === 'user' ? 'text-emerald-700' : 'text-red-700'}`}><SvgSpeaker width={24} height={32}/><span className="w-[1px]"> {role} </span></p>
    <p onClick={() => goToTime(start)} className={`pt-8 pb-2 ${((end > currentTime) && (start < currentTime)) ? 'opacity-100 font-bold scroll-mb-36' : 'opacity-30'}`} key={start}> {content}</p>   
  </div>
  )
}
