import { createContext,useEffect,useState } from "react";

export const Avatarcontext=createContext();
function AvatharProvider ({children}){
    const[currentAvathar,SetcurrentAvathar]=useState(JSON.parse(localStorage.getItem('avatar')));

    useEffect(()=>{
        localStorage.setItem('avatar', JSON.stringify(currentAvathar))
    }, [currentAvathar]);

    return <Avatarcontext.Provider value={{currentAvathar,SetcurrentAvathar}}>{children}</Avatarcontext.Provider>
}

export default AvatharProvider;

