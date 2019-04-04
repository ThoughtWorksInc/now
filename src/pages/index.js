import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import IntroSection from "../components/IntroSection";
import SectionContainer from "../components/SectionContainer";

const createAppropriateSection = (index, { section, html }) => {
  switch (section.toUpperCase()) {
    case "MAIN":
      return <IntroSection html={html} index={index} key={section} />;

    default:
      return (
        <SectionContainer
          id={section}
          key={section}
          index={index}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
  }
};

const index = ({ data }) => {
  const sections = data.allMarkdownRemark.edges.map(item => {
    let { section, order, showInMenu } = item.node.frontmatter;
    let html = item.node.html;
    return { section, order, showInMenu, html };
  });

  const menuEntries = sections
    .filter(item => item.showInMenu)
    .map(item => item.section);

  const { title, subTitle = "", description } = data.site.siteMetadata;

  return (
    <Layout
      title={title}
      subTitle={subTitle}
      description={description}
      menuEntries={menuEntries}
    >
      {sections &&
        sections.map((section, index) => {
          return createAppropriateSection(index, section);
        })}
    </Layout>
  );
};

export const query = graphql`
  query HomepageQuery {
    site {
      siteMetadata {
        title
        subTitle
        description
      }
    }
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
