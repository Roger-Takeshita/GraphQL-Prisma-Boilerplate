import { gql } from 'apollo-boost';

const createUser = gql`
    mutation($data: CreateUserInput!) {
        createUser(data: $data) {
            user {
                id
                name
            }
            token
        }
    }
`;

const getUsers = gql`
    query {
        users {
            id
            name
            email
        }
    }
`;

const login = gql`
    mutation($data: LoginUserInput) {
        loginUser(data: $data) {
            token
        }
    }
`;

const getProfile = gql`
    query {
        me {
            id
            name
            email
        }
    }
`;

export { createUser, getUsers, login, getProfile };
