import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const index = ({ data }) => (
  <Layout>
    {data &&
      data.allMarkdownRemark.edges.map(edge => (
        <div
          id={edge.node.frontmatter.section}
          key={edge.node.frontmatter.section}
          dangerouslySetInnerHTML={{ __html: edge.node.html }}
        />
      ))}
  </Layout>
);

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
      edges {
        node {
          frontmatter {
            section
            order
          }
          html
        }
      }
    }
  }
`;

export default index;
