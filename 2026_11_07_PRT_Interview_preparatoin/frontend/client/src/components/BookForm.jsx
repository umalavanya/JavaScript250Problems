import {useState, useEffect} from 'react';
const CATEGORIES = ['programming',
                    'DataScience',
                    'Database',
                    'WebDevelopment'  ];

const STATUSES = [  'Available',
                    'Issued',
                    'Reserved'   ];

const empty = { 
                title: '',
                author: '',
                isbn:'',
                category:'',
                status: ''    };

function BookForm({onSubmit, editingBook, onCancelEdit}){

    const [form, setForm] = useState(empty);
    const [errors, setErrors] = useState({});

    useEffect (() => {
        if(editingBook){
            setForm({
                title: editingBook.title,
                author: editingBook.author,
                isbn: editingBook.isbn,
                category: editingBook.category,
                status: editingBook.status,
            });
        } else {
            setForm(empty);
        }
    }, [editingBook]);

    const validate = () => {
        const e = {};

        if(!form.title.trim()){
            e.title = 'Book title is required!!';
        };

        if(!form.author.trim()){
            e.author = 'Author name is required!!';
        };

        if(!form.isbn.trim()){
            e.isbn = 'ISBN is required!!';
        }
    }

    return (
        <>
        <form className="book-form">
            <h2>{editingBook?'Edit Book':'Register Book'}</h2>


        </form>
        </>
    )
}

export default BookForm;
