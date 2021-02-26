const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const dotenv = require("dotenv").config();
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const PROJECT_NAME = "blost";
const adapterConfig = { mongoUri: process.env.mongoUri };
const postschema = require("./lists/Post");

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.cookieSecret,
});

keystone.createList("Post", postschema);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true }),
  ],
};
