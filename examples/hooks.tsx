import React from "react";

export function MyHooks({title}: {title: string}) {
    React.useEffect(() => {
        console.log('componentdidmount')
        console.log('componentdidupdate')
    })
    React.useEffect(() => {
        console.log('componentdidmount')
    }, [])
    return(
        <div>{title}</div>
    )
}

function useIsMounted() {
    const [isMounted, setIsMounted] = React.useState(false)
    
    React.useEffect(() => {
        setIsMounted(true)
    }, [])
    return [isMounted]
}