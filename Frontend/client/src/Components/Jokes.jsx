import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
const Jokes = () =>{
    useEffect(()=>{
        console.log("Page Updated")
    },[])
    const [joke,setjoke] = useState("")
        useEffect(()=>{
        return function(){
            console.log("Component Updated")
        }
    },[joke])
    const getjokes = (e) =>{
        e.preventDefault()
        return new Promise((resolve,reject)=>{
            console.log("Fetching Joke...")
            setTimeout(async()=>{
                let result = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single")
                let response = await result.data.joke
                setjoke(response)
                console.log(response)
                resolve("success")
            },3000)
        })
    }
    return(
        <>
        <div id = "mycontainer">
            <h1>Random Jokes😂</h1>
            <br></br>
            <p>{joke}</p>
            <br></br>
        <button onClick={(e)=>{
            getjokes(e).then(()=>{
                console.log("Joke received Successfully")
            })
            .catch((err)=>{
                console.log(err)
            })
        }}>get joke</button>
        </div>
        </>
    )
}
export default Jokes