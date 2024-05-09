import { useEffect, useRef, useState } from "react";

export const useAudioPlayer = () => {
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>();
  
    useEffect(() => {
      const audio = audioRef.current;
  
      if(audio){
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };
  
      const handlePlay = () => {
        setIsPlaying(true);
      };
  
      const handlePause = () => {
        setIsPlaying(false);
      };
  
      const handleSeeked = () => {
        setCurrentTime(audio.currentTime);
      };
  
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('seeked', handleSeeked);
  
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('seeked', handleSeeked);
      };
    }
    }, []);
  
    const goToTime = (time:number) => {
      if(audioRef.current){
        audioRef.current.currentTime = time;
      }
    };
  
    return { currentTime, isPlaying, audioRef, goToTime };
  };