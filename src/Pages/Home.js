import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'
import Navbar from '../Navbar'

const Home = () => {

    const itemStore = useSelector(store=> store.itemStore)
    const items = itemStore.items
    
  return (
    <div>
    <Navbar/>
    <div className='container-fluid'>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
        {
          items && items.map((item,i) =>{
              return <Card item={item} key={i}/>
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Home