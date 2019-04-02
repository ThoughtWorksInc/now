import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const index = ({ data }) => {
  const sections = data.allMarkdownRemark.edges.map(item => {
    let { section, order, showInMenu } = item.node.frontmatter;
    let html = item.node.html;
    return { section, order, showInMenu, html };
  });

  const menuEntries = sections
    .filter(item => item.showInMenu)
    .map(item => item.section);

  return (
    <Layout menuEntries={menuEntries}>
      {sections &&
        sections.map(section => (
          <div
            id={section.section}
            key={section.section}
            dangerouslySetInnerHTML={{ __html: section.html }}
          />
        ))}
    </Layout>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
      edges {
        node {
          frontmatter {
            section
            order
            showInMenu
          }
          html
        }
      }
    }
  }
`;

export default index;
