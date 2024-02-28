import "./pagination.css"

function Pagination({pages , currentPage , setCurrentPage}) {

    const gen = [] ;
    for(let i = 1 ; i <= pages ; i++ ){
        gen.push(i);
    }
    
  return (
    <div  className="pagination">
        <button disabled={ currentPage === 1}  onClick={() => setCurrentPage(prev => prev - 1 ) }  className="page-previous">
            Previous
        </button>
        {gen.map(page => 
            <div onClick={() => setCurrentPage(page)}  key={page} className={currentPage === page ? " page active" : "page" }>
                {page}
                 </div> 
             )}
              <button disabled={ currentPage === pages} onClick={() => setCurrentPage(prev => prev + 1 )} className="page-next">
            Next
        </button>
    </div>
  )
}

export default Pagination