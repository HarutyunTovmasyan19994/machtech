import React from "react";
import {useSelector} from "react-redux";
import "./style.css"

const Boxs = () => {
    const {cup} = useSelector(user => user.state)
    return (
        <div className="commonBox">
            <div className="box">
                {
                    cup.map(item => (
                        <div
                            style={{
                                width: item.width + "px",
                                height: +item.height + "px",
                                backgroundColor: "indianred"
                            }}
                            className="boxes"
                        >

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Boxs
