const configenv = require('dotenv').config();
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    
    if (configenv.error) {
        throw configenv.error
    }
    
    const server = Hapi.server({
        port:process.env.SERVER_PORT,
        host:process.env.SERVER_HOST,
        routes: {
            cors: {
                origin : ['*'],
            }
        }
    });

    server.route(routes);

    await server.start();

    console.log(`Server berjalan pada ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init().then(server => {
    console.log('server running')
}).catch(err => {
    console.log(err)
    process.exit(1)
})