import graphql from "gatsby";

export const recitationData = graphql`
  fragment recitationData on DataJsonRecitations {
    id
    arabic
    transliteration
    translation
  }
`;

export const stepsData = graphql`
  fragment stepsData on DataJsonStepsContent {
    id
    classes
    eleType
    txt
  }
`;
