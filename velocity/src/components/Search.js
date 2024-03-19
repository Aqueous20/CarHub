import React, { useContext } from 'react'
import { SearchContext } from '../context/search'

function Search() {
  const {searchActive} = useContext(SearchContext)
  return (
    <div>Search</div>
  )
}

export default Search