import React from 'react';
import './ListItems.css';
import FlipMove from 'react-flip-move';

function ListItems(props) {
   
        const items = props.items;
        const listItems = items.map(item =>
            {
                return <div className="list" key="item.key">
                <p>{item.text}</p>

                </div>
                    
            })
        return( <div>

          <FlipMove duration={300} easing="ease-in-out">
            {listItems}
           </FlipMove>

            </div>
              )

}

export default ListItems;