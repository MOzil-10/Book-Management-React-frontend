import { gql } from '@apollo/client';

export const ADD_NEW_BOOK = gql`
    mutation AddNewBook($bookInput: BookDto!) {
        addNewBook(bookInput: $bookInput) {
            id
            title
            author
            description
        }
    }
`;

export const GET_ALL_BOOKS = gql`
    query GetAllBooks {
        getAllBooks {
            id
            title
            author
            description
        }
    }
`;
