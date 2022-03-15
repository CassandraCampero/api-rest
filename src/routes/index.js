const { Router }  =  require('express') 
const router = Router()

//routes
router.get('/', (req,res)=>{
    res.json({"Title": "Hellow"})
})

router.get('/test', (req,res)=>{
    const data = {
        "name": "Cassandra",
        "age": "27"
    }

    res.json(data)
})

module.exports = router