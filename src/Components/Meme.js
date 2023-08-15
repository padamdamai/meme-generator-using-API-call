import  React from "react"
import memesData from "../MemeData"

export default function Meme(){


    const [meme ,setMeme] = React.useState({
        firstText : "",
        secondText : "",
        randomImage : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
    })

    const [allMemeImage ,setAllMemeImage] = React.useState(memesData)

     let url
    function getMemeImage(){
        const memeData =  allMemeImage.data.meme
        const randomNumber = Math.floor(Math.random() * memeData.length);
        url = memeData[randomNumber].url
        setMeme(previousMeme => ({...previousMeme ,randomImage :url}))
        // console.log(url)
   
    }

    console.log(meme)
    function handle_meme_text(event){
        const {name,value} = event.target
       setMeme(previousData => {
        return{
            ...previousData,
            [name] : value
        }
       })


    }

    return (
        <main>
            
         <div className="form">
           
        <input type="text" placeholder="top--text" className="form--input" 
         name="firstText" onChange={handle_meme_text} value={meme.firstText} />
        <input type="text" placeholder="bottom--text"  className="form--input"
         name="secondText" onChange={handle_meme_text} value={meme.secondText} />  
        <button className="form--buttom" onClick={getMemeImage}>Get a new meme image 💀</button>
         </div>
         <div className="Image__holder">
         <img src={meme.randomImage} className="image_meme" alt="image"/>
         </div>
        
            <article className="firstText" >{meme.firstText}</article>
         <article className="secondText">{meme.secondText}</article>
           
         
        </main>
    )
}