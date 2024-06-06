import React, { useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_BOOKS, ADD_NEW_BOOK } from '../queries';

export function Books() {
    const [content, setContent] = useState(<BookList showForm={showForm} />);

    function showList() {
        setContent(<BookList showForm={showForm} />);
    }

    function showForm() {
        setContent(<BookForm showList={showList} />);
    }

    return (
        <div className="container my-5" style={{ backgroundColor: "#f5f5f5", color: "#333333", padding: "20px" }}>
            {content}
        </div>
    );
}

function BookList(props) {
    const { loading, error, data, refetch } = useQuery(GET_ALL_BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const books = data?.getAllBooks || [];

    return (
        <>
            <h2 className="text-center mb-3" style={{ color: "#333333" }}>List of Books</h2>
            <button onClick={props.showForm} type="button" className="btn btn-primary me-2" style={{ backgroundColor: "#007bff" }}>Create</button>
            <button onClick={() => refetch()} type="button" className="btn btn-info me-2" style={{ backgroundColor: "#17a2b8" }}>Refresh</button>
            <table className="table" style={{ backgroundColor: "#ffffff" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.length === 0 ? (
                        <tr>
                            <td colSpan="5" className="text-center">No books available.</td>
                        </tr>
                    ) : (
                        books.map((book) => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.description}</td>
                                <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                                    <button type="button" className="btn btn-primary btn-sm me-2" style={{ backgroundColor: "#007bff" }}>Edit</button>
                                    <button type="button" className="btn btn-danger btn-sm me-2" style={{ backgroundColor: "#dc3545" }}>Delete</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </>
    );
}

function BookForm(props) {
    const [addNewBook, { loading, error }] = useMutation(ADD_NEW_BOOK, {
        refetchQueries: [{ query: GET_ALL_BOOKS }],
      });
      const [notification, setNotification] = useState(null);
    
      function handleSubmit(event) {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const book = Object.fromEntries(formData.entries());
    
        // Validation
        if (!book.title || !book.author || !book.description) {
          setNotification("Please provide all required fields.");
          return;
        }
    
        addNewBook({ variables: { bookInput: book } })
          .then(() => {
            props.showList();
            setNotification("Book added successfully.");
            setTimeout(() => {
              setNotification(null);
            }, 3000);
          })
          .catch((err) => {
            setNotification(`Error adding book: ${err.message}`);
          });
      }    

    return (
        <>
            <h2 className="text-center mb-3" style={{ color: "#333333" }}>Create new Book</h2>

            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Book Title</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="title" defaultValue="" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Book Author</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="author" defaultValue="" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Book Description</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="description" defaultValue="" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button type="submit" className="btn btn-primary btn-sm me-3" style={{ backgroundColor: "#007bff" }}>Save</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <button onClick={props.showList} type="button" className="btn btn-secondary me-2" style={{ backgroundColor: "#6c757d" }}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
