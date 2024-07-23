'use client';

import { createContext, useState, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";

export const LoaderContext = createContext();

const Providers = ({children}) => {

    const [ counterValue, setCounterValue ] = useState(0);
    const [ canScroll, setCanScroll ] = useState(false);
    const [ refreshRoutine, setRefreshRoutine ] = useState(false);

    const lenis = useLenis(() => {
        if(refreshRoutine){
            lenis.scrollTo(0, {immediate: true, force: true})
            lenis.stop();
        } 

        if(canScroll){
            lenis.start()
        } else {
            lenis.stop()
        }

        if(counterValue !== 100){
            lenis.scrollTo(0, { immediate: true, force: true })
        }

    }, [ counterValue, canScroll, refreshRoutine])

  useEffect(() => {

    window.addEventListener("beforeunload", () => {
      setRefreshRoutine(true)
    })

    return () => {

      window.removeEventListener('beforeunload', () => {
        setRefreshRoutine(true)
      })
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      
      if(counterValue === 100){
        return;
      }

      setCounterValue(counterValue + Math.floor(Math.random() * 10) + 1);

      if(counterValue > 100) {
        setCounterValue(100);
      }

    }, 100);

    return () => clearInterval(interval);

  }, [counterValue])
    
  return (
    <LoaderContext.Provider value={{ counterValue, canScroll, setCanScroll }}>
        {children}
    </LoaderContext.Provider>
  )
}

export default Providers;

