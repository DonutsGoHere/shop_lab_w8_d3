import React, {useState} from 'react'
import AddToBasket from '../components/UserInputForm'

const ShopContainer = () => {
  const [items, setItems] = useState([
    {id: 1, name: "Milk Chocolate Bar", type: "40g single bar", price: 2, inBasket: false},
    {id: 2, name: "Dark Chocolate Bar", type: "40g single bar", price: 2, inBasket: false},
    {id: 3, name: "White Chocolate Bar", type: "40g single bar", price: 2, inBasket: false}
  ]);

  const [addedItems, setAddedItems] = useState([])


  const handleChange = (item) => {
    const updatedItems = [...addedItems]
    updatedItems.push(item)
    setAddedItems(updatedItems)
  }

  
  return (
    <div>
      <ul>
        {items.map((item, index) => {
            return (
            <li key={index}>name: {item.name}, 
                price: {item.price},
                <button onClick = {() =>handleChange(item)}>test button</button>
                {/* <AddToBasket handleSelectChange={handleSelectChange}  /> */}
            </li>)

        })}
     
      </ul> 
      <ul>
        {addedItems.map((item, index) => {
            return (
            <li key={index}>name: {item.name}, 
                price: {item.price}
            </li>)

        })}
      </ul> 
    </div>
  )

}

export default ShopContainer;