import { useDispatch } from 'react-redux';
import Header from '../components/Header.jsx';
import { addBook, toggleRead } from '../store/booksSlice.js';
import { useNavigate } from 'react-router-dom';

function AddBookPage() {

    const pageTitle = "Add Book";
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleAddBookButton(e) {
        e.preventDefault();

        const newBook = {
            title: document.querySelector('[name="title"]').value,
            cover: document.querySelector('[name="cover"]').value,
            isRead: false,
            author: document.querySelector('[name="author"]').value,
            synopsis: document.querySelector('[name="synopsis"]').value
        }

        if (newBook.title && newBook.cover && newBook.author && newBook.synopsis) {
            alert('Book created successfully!');
            dispatch(addBook(newBook));
            navigate('/');
        } else {
            alert('Please, fill the mandatory fields');
        }
    }

    return (
        <>
            <div className="container">
                <Header pageTitle={pageTitle} />

                <form className="add-form">
                    <div className="form-control">
                        <label>Title *</label>
                        <input type="text" name="title" placeholder="Add Book Title" />
                    </div>
                    <div className="form-control">
                        <label>Book Cover *</label>
                        <input type="text" name="cover" placeholder="Add Cover" />
                    </div>

                    <div className="form-control">
                        <label>Author *</label>
                        <input
                            type="text" name="author" placeholder="Add Author" />
                    </div>

                    <div className="form-control">
                        <label>Synopsis *</label>
                        <textarea
                            type="text" name="synopsis" placeholder="Add a synopsis..." />
                    </div>

                    <button onClick={(e) => handleAddBookButton(e)} className="btn btn-block">Save Book</button>
                </form>

            </div>


        </>
    )
}

export default AddBookPage
