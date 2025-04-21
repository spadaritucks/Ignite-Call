// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { primsa } from '../../../lib/prisma'
import { setCookie } from 'nookies'



export default async function handler( req: NextApiRequest,res: NextApiResponse) {

    if(req.method !== 'POST'){
        return res.status(405).end()
    }
    
   

    const {name, username} = req.body

    const userExists = await primsa.user.findUnique({
        where: {
            username
        }
    })

    if(userExists){
        return res.status(400).json({
            message : "Username already taken"
        })
    }

    const user = await primsa.user.create({
        data: {
            name,
            username
        },
    })

    setCookie({res}, '@ignitecall:userId', user.id, {
        maxAge: 60 * 60 * 24 * 7,
        path : '/'
    })

    return res.status(201).json(user)
}
