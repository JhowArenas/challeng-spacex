import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getAllUsers {
      id
      firstName
      email
      password
    }
  }
`;

export const LOAD_ROCKETS = gql`
query {
  getAllRockets {
    id
    name
    type
    description
    country
  }
}
`

export const LOAD_ROCKET = gql`
query LOAD_ROCKET($id: String!)  {
  getRocket(id:$id) {
    id
    name
    type
    description
    country
  }
}
`