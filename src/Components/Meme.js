import  React from "react"
// import memesData from "../allMemeImage"

export default function Meme(){


    const [meme ,setMeme] = React.useState({
        firstText : "",
        secondText : "",
        randomImage : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
    })

    const [allMemeImage ,setAllMemeImage] = React.useState([])


React.useEffect(() => {

 fetch("https://api.imgflip.com/get_memes")  // fatching the API 
.then(res => res.json())  // receive  the response with json
.then(data =>console.log(data)) //turning into javascript objet for using 

},[])

     let url
    function getMemeImage(){
        // const allMemeImage =  allMemeImage.data.meme
        const randomNumber = Math.floor(Math.random() * allMemeImage.length);
        url = allMemeImage[randomNumber].url
        setMeme(previousMeme => ({...previousMeme ,randomImage :url}))
    
   
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



fetch("https://api.imgflip.com/get_memes")
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
         <img src={meme.randomImage} className="image_meme" alt="pic"/>
         </div>
         <div className="article__holder">
            <article className="firstText" >{meme.firstText}</article>
         <article className="secondText">{meme.secondText}</article>
            </div>
         
        </main>
    )
}