import React from "react";
import {useSelector} from "react-redux";
import "./style.css"

const Boxs = () => {
    const {cup} = useSelector(user => user.state)
    console.log(cup)
    return (
        <div className="commonBox">
            <div className="box">
                {
                    cup.map(item => (
                        [...Array(parseInt(item.quantity)).keys()].map((e) => {

                            return <div
                                key={item.id + e}
                                style={{
                                    width: (item.width * 0.26) + "px",
                                    height: (item.height * 0.26) + "px",
                                    backgroundColor: item.color
                                }}
                                className="boxes"
                            >

                            </div>
                        })

                    ))
                }
            </div>
        </div>
    )
}

export default Boxs
