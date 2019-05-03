// Pausing the code here
// We need to call the export.modules component 'GuideTemplate'
// from here & append it to the createPage function below
// WIP

const path = require("path");

// see this post:
// https://justinformentin.com/guide-to-building-a-gatsby-site#creating-the-layout-page
exports.createPages = async ({ graphql, actions }) => {
  const { createPages } = actions;
  const results = await graphql(`
    {
      allDataJson {
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
    return results.errors;
  } else {
    console.log("no errors reported by node");
    const { menuSections } = results.data.allDataJson.nodes[0];
    console.log("guideTemplate: ", GuideTemplate);
    menuSections.forEach((headingObj, i) => {
      const { label, headings } = headingObj;
      if (
        label !== "Local Salah Time" &&
        label !== "Salah Walkthrough" &&
        label !== "Misc"
      ) {
        // console.log("filtered label: ", label);
        const collection = [];
        headings.forEach(heading => {
          let link = heading.replace(/[^\w]/g, "");
          link = link.charAt(0).toLowerCase() + link.slice(1);
          // console.log("link: ", link);
          // createPages({
          //   link,
          //   component: GuideTemplate,
          // });
        });
      }
    });
  }
};
