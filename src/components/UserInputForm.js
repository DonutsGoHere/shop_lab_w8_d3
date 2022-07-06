import React from "react";

const AddToBasket = ({item, handleSelectChange}) => {
  
    const handleChange = (evt) => {
      const item = evt.target.value;
      handleSelectChange(item);
    }

    return (
      <div>
        <ul>
            {/* {listItems} */}
        <button item={item} onClick={handleChange} />
        </ul>
      </div>
    )
}


export default AddToBasket;
