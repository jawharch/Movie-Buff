import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import PaginationCom from './PaginationCom'
const MoviesList = ({movies,getPage,pagecount}) => {
  return (
    <Row className='mt-3'>
        {
            movies.length  ? (

                movies.map((item)=>
                {
                    
                    return(
                        <CardMovie item={item} key={item.id}/>
                    )
                })
            )
                :<h2>  there is no movies</h2>
        }
        {movies.length >=1 ?(<PaginationCom getPage={getPage} pagecount={pagecount}/>):null}
        
       

      
  
  
    </Row>
    
  )
}

export default MoviesList
