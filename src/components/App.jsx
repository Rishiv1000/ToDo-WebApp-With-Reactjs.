import React from "react";
import Header  from "./Header";
import Footer from "./Footer";  
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";



function App(){

    const [news ,setNews] = React.useState([])

    function myfun_add(newNotes){
        setNews(prevNotes=>{
          return [...prevNotes,newNotes]
      })
    console.log(newNotes)
    }

    function deleteNotes(id){
        setNews(prevNotes=>{
            return prevNotes.filter((noteItem,index)=>{
                return index !== id
            })
        })
        console.log("delete")
    }
 
    return <div>
        <Header/>
        <CreateArea onAdd={myfun_add}/>
       {news.map((items,index)=>{
            return (<Note key={index} id={index} onDelete={deleteNotes} name={items.title} para={items.content}/>)
        })}
        <Footer/>
    </div>
}

export default App