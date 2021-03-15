import { gql } from "@apollo/client";

export const LOAD_CREW = gql`
  query {
    getAllCrew {
      id
      name
      agency
      image
      wikipedia
      status
    }
  }
`;


export const LOAD_LAUNCHES = gql`
query {
  getAllLaunches {
    id
    static_fire_date_utc
    rocket
    success
    details
    flight_number
    name
  }
}
`

export const LOAD_ROCKETS = gql`
query {
  getAllRockets {
    id
    name
    active
    type
    description
    country
    company
    height {
      meters
    }
    diameter {
      meters
    }
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