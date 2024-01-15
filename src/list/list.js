import React, {useState,useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import "./list.css"
import {EDIT_BOX, SEND_SIZE, SYNC_TODOS} from "../redux/action/action";


function Edit({square, formHandle, cup,setSquare,EditeBox}) {
    useEffect(() => {
        setSquare(EditeBox)
    }, [EditeBox])
    const dispatch = useDispatch()
    const DispatchFunction = () => {
        if (square.id) {
            const editTodo = cup.map(item => {
                if (item.id === square.id) {
                    return square
                }
                return item
            })
            dispatch({type:SYNC_TODOS,payload:editTodo})
        }
        else{
            dispatch({type: SEND_SIZE, payload: {...square, id: Date.now()}})
        }
    }

    return (
        <tr>
            <td>
                <input type="text" name="width" value={square.width} onChange={formHandle}/>
            </td>
            <td>
                <input type="text" name="height" value={square.height} onChange={formHandle}/>
            </td>
            <td>
                <button type="submit" onClick={DispatchFunction}>Update</button>
            </td>

        </tr>
    )
}


export default Edit
