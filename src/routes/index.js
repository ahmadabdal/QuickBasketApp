import { authRoutes } from "./auth.js"



const prefix= '/api'


export const registerRouts = async(fastify)=>{
    fastify.register(authRoutes,{prefix:prefix})
}