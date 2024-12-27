import { Link, useNavigate, useParams } from 'react-router-dom';
import Notes from '../components/Notes.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { eraseBook, selectBooks, toggleRead } from '../store/booksSlice.js';

function SingleBookPage() {

  const { id } = useParams();
  const books = useSelector(selectBooks)
  const book = books.filter(book => book.id == id)[0];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleEraseBook(id) {
    if (confirm('Are you sure you want to delete this book?')) {
      dispatch(eraseBook(id));
      navigate('/');
    }
  }

  return (
    <>
      <div className="container">
        <Link to="/">
          <button className="btn">
            ← Back to Books
          </button>
        </Link>
        {book ?
          <>
            <div className="single-book">
              <div className="book-cover">
                <img src={book.cover} />
              </div>

              <div className="book-details">
                <h3 className="book-title">{book.title}</h3>
                <h4 className="book-author">{book.author}</h4>
                <p>{book.synopsis}</p>
                <div className="read-checkbox">
                  <input type="checkbox" onClick={() => dispatch(toggleRead(book.id))} defaultChecked={book.isRead} />
                  <label>{book.isRead ? "Already Read It" : "Haven't Read it yet"}</label>
                </div>
                <div onClick={() => handleEraseBook(book.id)} className="erase-book">
                  Erase book
                </div>
              </div>
            </div>

            <Notes />


          </>
          : <>
            <p>Book not found. Click button above to go back to the list of books.</p>
          </>
        }

      </div>
    </>
  )
}

export default SingleBookPage
