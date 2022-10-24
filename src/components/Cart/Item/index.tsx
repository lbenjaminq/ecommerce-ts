import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { CartItem } from '../../../types/type'

type Props = {
  item:CartItem
}

export const Item: React.FC<Props> = ({ item }) => {
  return (
    <>
      <div>
        <div>
          <Button>
            <FontAwesomeIcon icon={faPlus} />
            <FontAwesomeIcon icon={faMinus} />
          </Button>
        </div>
        <div>
          <div>
            <img src={item.image}/>
          </div>
          <div>
            <div>
              {item.title}
            </div>
          </div>
        </div>
        <div>
          <Button variant="danger" title="Remove product">
            <FontAwesomeIcon icon={faTrashAlt} />
          </Button>
        </div>
      </div>
    </>
  )
}
