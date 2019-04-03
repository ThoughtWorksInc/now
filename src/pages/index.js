import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import IntroSection from "../components/IntroSection";
import SingleColumnContainer from "../components/SingleColumnContainer";

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
        sections.map((section, index) => {
          if (section.section === "main") {
            return <IntroSection html={section.html} key={section.section} />;
          } else {
            return (
              <SingleColumnContainer
                id={section.section}
                key={section.section}
                bgColor={index % 2 === 0 ? "black" : "rebeccapurple"}
              >
                <div dangerouslySetInnerHTML={{ __html: section.html }} />
              </SingleColumnContainer>
            );
          }
        })}
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
