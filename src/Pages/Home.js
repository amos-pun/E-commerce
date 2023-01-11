import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

    const itemReduceer = useSelector(store=> store.itemStore)
    const items = itemStore.items
    
  return (
    <div>
    {
        items && items.map(items =>{
            return 
        })
    }
    </div>
  )
}

export default Home