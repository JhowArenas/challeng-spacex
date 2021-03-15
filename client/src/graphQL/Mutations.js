import { gql } from "@apollo/client";

export const CREATE_CREW_MUTATION = gql`
  mutation createCrew(
    $name: String!
    $agency: String!
    $image: String!
    $wikipedia: String
    $status: String
  ) {
    createCrew(
      name: $name
      agency: $agency
      image: $image
      wikipedia: $wikipedia
      status: $status
    ) {
      id
    }
  }
`;
