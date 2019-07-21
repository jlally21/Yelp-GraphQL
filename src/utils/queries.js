import { gql } from 'apollo-boost';

export const SEARCH = gql`
  query Search($term: String, $location: String, $latitude: Float, $longitude: Float, $limit: Int) {
    search(
      term: $term
      location: $location
      latitude: $latitude
      longitude: $longitude
      limit: $limit
    ) {
      total
      business {
        name
        url
        coordinates {
          latitude
          longitude
        }
      }
    }
  }
`;
