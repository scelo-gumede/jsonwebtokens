import jsonwebtoken from "jsonwebtoken"

const jwt = jsonwebtoken

export const authMiddleware = async (req,res,next)=>{

    const authentication = req.headers.authorization

    if(!authentication || !authentication.startsWith("Bearer ")){
        throw Error("unauthenticated user")
    }

    const token = authentication.split(" ")[1]

    try{
        const decode = jwt.verify(token,"shhtyegsgga")

        const{username,id}=decode

        req.user={username,id}

        next()
    }catch(err){
        console.error(err)
    }


}