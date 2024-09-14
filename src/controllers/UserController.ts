import jsonwebtoken from "jsonwebtoken"

const jwt = jsonwebtoken


export const Login = async (req,res)=>{
    const{username,password}=req.body

    if(!username || !password){
        throw Error("bad request")
    }

    const id = Date.now()

    const token = jwt.sign({username,id},"shhtyegsgga",{expiresIn:"30d"})

    res.status(200).json({token})

}

export const Dashboard = async (req,res)=>{

    res.status(200).json({
        name:req.user.username,
        password:req.user.id
    
    })

}