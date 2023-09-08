'use client'

import React,{useMemo} from 'react'
import dynamic from 'next/dynamic'


const Location =() => {
    
    const Map = useMemo(() => dynamic(() => import('./Map'), { 
        loading: ()=> <p>Map i loading ...</p>,
        
        ssr: false
     }), [])
    
    return <Map/>

}
   

export default Location