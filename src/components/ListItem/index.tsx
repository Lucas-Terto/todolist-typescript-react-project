import React, {useState} from "react";
import * as C from './styles'
import {Item} from '../../types/item'

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void,
}

const ListItem = ({item, onChange}:Props) => {

    return (
        <C.Container done={item.done}>
            <input 
            type="checkbox" 
            checked={item.done}
            onChange={(e) => onChange(item.id, e.target.checked)}
            />
            <label htmlFor="name">{item.name} / Done:{item.done.toString()}</label>
        </C.Container>
    )
}

export default ListItem