import 'dotenv/config'

import {connectDB} from './src/config/connect.js'
import Fastify from 'fastify';
import { admin,buildAdminRouter } from './src/config/setup.js';
import { PORT } from './src/config/config.js';
import { registerRouts } from './src/routes/index.js';

const start= async()=> {

    await connectDB(process.env.MONGO_URI)
    const app=Fastify();

    await registerRouts(app);

    await buildAdminRouter(app);
    app.listen({port:PORT, host:"0.0.0.0"},
        (err,add)=>  {
            if(err){
                console.log(err);
                
            }
            else {
                console.log(`Quickbasket started on http://localhost:${PORT}${admin.options.rootPath}`);
                
            }
        }
    )
}

start();

