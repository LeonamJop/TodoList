import { useState, useEffect } from "react";
import * as C from "./styles";
import { Item } from '../../types/item'


type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)
    const [doneState, setDoneState] = useState(false)

    useEffect(() => {
        isChecked ? setDoneState(true) : setDoneState(false)
    }, [isChecked])

    return (

        <C.Container done={isChecked}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{`${item.name} - ${doneState}`} </label>
        </C.Container>
    );
}