import { useDispatch, useSelector } from "react-redux"
import { addNote, eraseNote, selectNotes } from "../store/notesSlice";

function Notes({ bookId }) {

  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();
  const notesFiltered = notes.filter(note => note.book_id == bookId)

  function handleAddNote(e){
    e.preventDefault();
    let newNote = {
      title: document.querySelector('[name="title"]').value,
      text: document.querySelector('[name="note"]'),
      book_id: bookId
    }
    if(newNote.title && newNote.text){
      dispatch(addNote(newNote));

    }else{
      alert('');
    }
    console.log(newNote);
  }

  return (
    <>

      <div className="notes-wrapper">

        <h2>Reader's Notes</h2>

        <div className="notes">
          {notesFiltered.map(note =>
            <div key={note.id} className="note">
              <div onClick={() => dispatch(eraseNote(note.id))} className="erase-note">Erase note</div>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </div>
          )}
        </div>

        <details>
          <summary>Add a note</summary>
          <form className="add-note">
            <div className="form-control">
              <label>Title *</label>
              <input type="text" name="title" placeholder="Add a note title" />
            </div>
            <div className="form-control">
              <label>Note *</label>
              <textarea type="text" name="note" placeholder="Add note" />
            </div>

            <button onClick={(e) => handleAddNote(e)} className="btn btn-block">Add Note</button>
          </form>
        </details>

      </div>

    </>
  )
}

export default Notes
