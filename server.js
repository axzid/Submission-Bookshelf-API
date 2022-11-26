const Hapi = require("@hapi/hapi");
const routes = require("./src/routes");

const server = new Hapi.Server({
  host: "localhost",
  port: 5000,
});

server.route(routes);

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
