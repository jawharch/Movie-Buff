import React from 'react'
import { Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'

const PaginationCom = ({getPage,pagecount}) => {
  const handlePageCliCK=(data)=>
  {
   
    getPage(data.selected+1)


  }
  const pageCount=pagecount
  

  
  return (
    
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageCliCK}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName='pagination justify-content-center'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        nextClassName='page-item'
        
        previousLinkClassName='page-link'
        nextLinkClassName='page-link'
        breakClassName='page_item'
        breakLinkClassName='page-link'
        activeClassName='act active'
        
      />
    
  )
}

export default PaginationCom
