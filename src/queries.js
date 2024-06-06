import { gql } from '@apollo/client';

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

export const ADD_NEW_BOOK = gql`
  mutation AddNewBook($bookInput: BookInput!) {
    addNewBook(bookInput: $bookInput) {
      id
      title
      author
      description
    }
  }
`;