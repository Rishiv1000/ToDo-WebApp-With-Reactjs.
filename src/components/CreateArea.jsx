import React from "react";

function CreateArea(props) {
    const [notesItem,setNote]= React.useState({
        title : "",
        content : ""
    })

    function handleChange(event){
        const {name, value}= event.target

        setNote(prevNote=>{
            return{
                ...prevNote,
                [name] :value
            }
        })
    }

    function submitNote( event){
        props.onAdd(notesItem)
        event.preventDefault()
    }

  return (
    <div>
      <form>
        <input onChange={handleChange} value={notesItem.title } name="title" placeholder="Title" />
        <textarea onChange={handleChange}  value={notesItem.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
