const {Router} = require('express')
const _= require('underscore')
const router = Router()

const movies = require('../sample.json')
console.log(movies)

router.get('/', (req,res)=>{
    res.json(movies)
})

router.post('/', (req,res)=>{
    const { title, anio} = req.body

    if( title && anio){

        const id = movies.length+1
        const newMovie = {id, ...req.body}

        movies.push(newMovie)

        res.json(movies)
        
    }else{
        res.send('no recibido')
    }
    
    

})

router.delete('/:id',(req, res)=>{

    const { id } = req.params
    console.log("id", id)
    
    _.each(movies,(movie, i)=>{
        console.log("id mov", movie.id)
        if(movie.id === id){
            movies.splice(i,1)
        }

    })


    res.json(movies)

})

router.put('/:id', (req, res)=>{
    const { id } = req.params
    const { title, anio} = req.body
   
        if(title && anio){
            _.each(movies, (movie,i)=>{
                if(movie.id == id){
                    movie.title = title,
                    movie.anio = anio
                }

                
    })
    res.json(movies)
        }
})

module.exports = router

