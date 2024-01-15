import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './form.css'
import {DELETE_BOX, SEND_SIZE} from "../redux/action/action";
import Edit from "../list/list";

const Form = () => {
    const [square, setSquare] = useState({width: "", height: ""})
    const {cup,EditeBox} = useSelector(user => user.state)
    const dispatch = useDispatch()
    const formHandle = (e) => {
        const {name, value} = e.target
        setSquare({...square, [name]: value})
    }
    const sendHandle = () => {
        dispatch({type: SEND_SIZE, payload: {...square, id: Date.now()}})
    }

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
                                            </tr>
                                            {
                                                cup.map(item => (
                                                    EditeBox.id === item.id  ?
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
                                                            <td>56546</td>
                                                            <td>
                                                                <button className="btnEdit"
                                                                        onClick={() =>dispatch({type:"EDIT_BOX",payload:item})}>
                                                                    Edit
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button className="btnDelete"
                                                                onClick={()=> dispatch({type: DELETE_BOX,payload:item.id})}
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
                        <input type="text" placeholder="Width" name="width" onChange={(e) => formHandle(e)}/>
                        <input type="text" placeholder="Height" name="height" onChange={(e) => formHandle(e)}/>
                        <input type="text" placeholder="Quantity"/>
                        <input type="submit" className="btn" onClick={sendHandle} placeholder="SEND"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form
