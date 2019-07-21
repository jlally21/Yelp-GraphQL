import { gql } from 'apollo-boost';

export const SEARCH = gql`
  query Search(
    $term: String
    $location: String
    $latitude: Float
    $longitude: Float
    $categories: String
    $limit: Int
  ) {
    search(
      term: $term
      location: $location
      latitude: $latitude
      longitude: $longitude
      categories: $categories
      limit: $limit
    ) {
      total
      business {
        name
        id
        url
        phone
        rating
        photos
        coordinates {
          latitude
          longitude
        }
        categories {
          alias
          parent_categories {
            title
            alias
          }
        }
      }
    }
  }
`;
