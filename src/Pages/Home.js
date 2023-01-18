import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'
import Navbar from '../Navbar'

const Home = () => {

    const [search,setSearch] = useState("")
    const [filteredproduct, setFilteredProduct] = useState([])
    
    const itemStore = useSelector(store=> store.itemStore)
    const items = itemStore.items

    const filterproduct = () => {
      setFilteredProduct(items.filter(item=>item.item_name.toLowerCase().match(search.toLowerCase())))
    }

    useEffect(filterproduct,[search])
    
    
  return (
    <div>
    <Navbar/>
    <div className='container-fluid input_search '>
      <input type={'search'} 
        className='form-control w-50 p-2 m-2 bg-light input_s' 
        placeholder='enter mobile code' 
        onChange={(e)=>setSearch(e.target.value)}
        onKeyUp={filterproduct}
        />
        
    </div>
    <div className='container-fluid'>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
        {
          filteredproduct && filteredproduct.map((item,i) =>{
              return <Card item={item} key={i}/>
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Home