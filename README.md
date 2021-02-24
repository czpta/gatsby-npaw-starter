<h1 align="center">
  NPAW Gatsby Integration
</h1>

Gatsby is famous for having default starters. This project can serve as a default to NPAW's platform. Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files + NPAW configuration you might need to get up and running.

_Have another more specific idea? You may want to check out the collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the NPAW starter.

    ```shell
    # create a new Gatsby site using the NPAW starter
    gatsby new gatsby-npaw-starter https://github.com/czpta/gatsby-npaw-starter
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd gatsby-npaw-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the path `src/components/layout.js` to enter your NPAW accountCode and username.

## ▶️ NPAW Integration

In order to kick off the integration, enter your `accountCode` and `userName` on line 20 of [layout.js](https://github.com/czpta/gatsby-npaw-starter/blob/master/src/components/layout.js). A friendlier environment can be developed in the future, but this was a quick solution which did not beg for more invested time.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md