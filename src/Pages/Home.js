import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

    const itemStore = useSelector(store=> store.itemStore)
    const items = itemStore.items
    
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
      {
        items && items.map(items =>{
            return <div className="col">
              <div className="card">
                 <img src={items.item_image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{items.item_name}</h5>
                <h5 className="card-title">{items.item_price}</h5>

              </div>
            </div>
          </div>
        })
      }
      </div>
    </div>
  )
}

export default Home