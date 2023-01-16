import { gql } from "@apollo/client";

const SEND_FORM = gql`
  mutation sendForm(
    $name: String!
    $lastName: String!
    $phoneNumber: String!
    $text: String!
    $city: String!
  ) {
    createForm(
      data: {
        name: $name
        lastName: $lastName
        phoneNumber: $phoneNumber
        text: $text
        city: $city
      }
    ) {
      id
    }
  }
`;
export { SEND_FORM };
