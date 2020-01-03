import React from 'react'



function DogFilter({updateSearch}){
  
    const handleSearch = (event) => {
        updateSearch(event.target.value)
        
    }

        return(
            <>
                <form className='search'>
                    <input type='text' name='search-dog' onChange={handleSearch} />
                    <i className='fa fa-search'></i>
                </form>
            </>
        )
}
export default DogFilter;