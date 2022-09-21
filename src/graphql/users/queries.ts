import { gql } from '@apollo/client';

const GetUsers = gql`
  query GetUsers {
    Users {
      _id
      name
      lastName
      identification
      email
      role
      status
    }
  }
`;
export { GetUsers };
