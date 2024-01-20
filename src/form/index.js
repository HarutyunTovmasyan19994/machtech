import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DELETE_BOX, SEND_SIZE} from "../redux/action/action";
import Edit from "../list/list";
import './form.css'

const Form = () => {
    const [square, setSquare] = useState({width: "", height: ""})
    const[colors,setColors] = useState('')
    const {cup, EditeBox} = useSelector(user => user.state)
    const dispatch = useDispatch()
    const formHandle = (e) => {
        const {name, value} = e.target
        setSquare({...square, [name]: value})
    }
    useEffect(()=>{
        const val = "#" +
            Math.floor((
                Math.random()*(256*256*256).toString(16)
            ))
        setColors(val)
    },[square])
    const sendHandle = () => {
        dispatch({type: SEND_SIZE, payload: {...square, id: Date.now(),color:colors}})
    }
    console.log(colors,"colors")

    return (
        <>
            <div>
                <div>
                    <div className="listCommon">
                        <div className="list">
                            <div>
                                <form>
                                    {
                                        cup.length >= 1 ? <table className="table">
                                            <tr>
                                                <th>Width</th>
                                                <th>Height</th>
                                                <th>Quantity</th>
                                            </tr>
                                            {
                                                cup.map(item => (
                                                    EditeBox.id === item.id ?
                                                        <Edit
                                                            square={square}
                                                            setSquare={setSquare}
                                                            formHandle={formHandle}
                                                            cup={cup}
                                                            EditeBox={EditeBox}
                                                        /> :
                                                        <tr>
                                                            <td>{item.width}</td>
                                                            <td>{item.height}</td>
                                                            <td>{item.quantity}</td>
                                                            <td>
                                                                <button className="btnEdit"
                                                                        onClick={() => dispatch({
                                                                            type: "EDIT_BOX",
                                                                            payload: item
                                                                        })}>
                                                                    Edit
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button className="btnDelete"
                                                                        onClick={() => dispatch({
                                                                            type: DELETE_BOX,
                                                                            payload: item.id
                                                                        })}
                                                                >
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                ))
                                            }   </table> : <></>
                                    }
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="form">
                    <form>
                        <input type="number" placeholder="Width" name="width" onChange={(e) => formHandle(e)}/>
                        <input type="number" placeholder="Height" name="height" onChange={(e) => formHandle(e)}/>
                        <input type="number" placeholder="Quantity" name="quantity" onChange={(e) => formHandle(e)}/>
                        <input type="submit" className="btn" onClick={sendHandle} placeholder="SEND"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form
