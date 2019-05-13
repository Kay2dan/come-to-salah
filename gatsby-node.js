const path = require("path");
const {
  removeSpecialCharactersAndCapitaliseFirstLetter,
} = require("./src/utilities/utilities");

// see this post:
// https://justinformentin.com/guide-to-building-a-gatsby-site#creating-the-layout-page
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const results = await graphql(`
    {
      allDataJson(filter: { title: { eq: "Menu" } }) {
        nodes {
          menuSections {
            label
            headings
          }
        }
      }
    }
  `);
  if (results.errors) {
    console.log("!!! ___ results.errors: ", results.errors);
    return results.errors;
  } else {
    const { menuSections } = results.data.allDataJson.nodes[0];
    const filteredSections = menuSections.filter(
      section =>
        section.label !== "Local Salah Time" &&
        section.label !== "How To Pray Salah" &&
        section.label !== "About"
    );
    filteredSections.forEach(section =>
      section.headings.forEach(heading => {
        // TODO: We are using this regex at two places: 1-here;
        // 2-GuideTemplate.Pagination; Move to a separate function module
        let link = heading.replace(/[^\w]/g, "");
        link = link.charAt(0).toLowerCase() + link.slice(1);
        createPage({
          path: link,
          component: path.resolve("./src/template/GuideTemplate.js"),
          context: {
            heading,
          },
        });
      })
    );
  }
};
