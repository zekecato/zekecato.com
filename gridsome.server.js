module.exports = function(api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        allWordPressPage(filter: { status: { eq: "publish" } }) {
          edges {
            node {
              id
              title
              slug
              parent
            }
          }
        }
      }
    `);

    const { data: postCategories } = await graphql(`
      {
        allWordPressCategory {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `);

    const homePage = data.allWordPressPage.edges.find(({ node }) => {
      return node.slug == "about";
    });

    const tipsForTipsPage = data.allWordPressPage.edges.find(({ node }) => {
      return node.slug == "tips-for-tips";
    });

    const masksPage = data.allWordPressPage.edges.find(({ node }) => {
      return node.slug == "cloth-masks";
    });

    const classesPage = data.allWordPressPage.edges.find(({ node }) => {
      return node.slug == "classes";
    });

    const classesCategory = postCategories.allWordPressCategory.edges.find(
      ({ node }) => {
        return node.title.toLowerCase() == "classes";
      }
    );

    data.allWordPressPage.edges.forEach(({ node }) => {
      if (node.id == tipsForTipsPage.node.id) {
        createPage({
          path: `/${node.slug}`,
          component: "./src/templates/TipsForTipsPage.vue",
          context: {
            id: node.id,
          },
        });
        return;
      }

      if (node.id == masksPage.node.id) {
        createPage({
          path: `/${node.slug}`,
          component: "./src/templates/MasksPage.vue",
          context: {
            id: node.id,
          },
        });
        return;
      }

      if (node.id == classesPage.node.id) {
        createPage({
          path: `/${node.slug}`,
          component: "./src/templates/PostListPage.vue",
          context: {
            id: node.id,
            catId: classesCategory.node.id,
          },
        });
        return;
      }

      if (node.parent == "0") {
        createPage({
          path: `/${node.slug}`,
          component: "./src/templates/WordPressPage.vue",
          context: {
            id: node.id,
          },
        });
        return;
      }

      if (node.parent != "0") {
        let parentPageSlug = data.allWordPressPage.edges.find((p) => {
          return p.node.id == node.parent;
        }).node.slug;

        createPage({
          path: `/${parentPageSlug}/${node.slug}`,
          component: "./src/templates/WordPressPage.vue",
          context: {
            id: node.id,
          },
        });
      }
    });

    createPage({
      path: "/",
      component: "./src/templates/WordPressPage.vue",
      context: {
        id: homePage.node.id,
      },
    });
  });
};
