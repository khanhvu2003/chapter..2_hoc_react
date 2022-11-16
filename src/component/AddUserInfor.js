import React, { useEffect, useState } from "react";
// Stateless vs stateful 

const AddUserInfor = (props) => {

    const [name, setname] = useState(" ")
    const [address, setaddress] = useState('khanh lai lap trinh')
    const [Age, setAge] = useState(" ")

    const handleOnchangeInput = (event) => {
        setname(event.target.value)
    }

    const handleOnchangeAge = (event) => {
        setAge(event.target.value)
    }


    const handleOnSubmit = (event) => {
        event.preventDefault()

        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-ramdom',
            name: name,
            age: Age
        })
    }
    useEffect( () => {
        console.log(">>> call me useEffect ")
    },[ ])
    console.log(">>> call me reder")
    return (
        <div>
            my name is : {name} <br></br>
            address : {address} <br></br>
            age : {Age}
            {/* <div>
                    <button onClick={(event) => { this.handleClick(event) }} > Click My</button>
                </div> */}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label> you name: </label>
                <input
                    value={name}
                    onChange={(event) => handleOnchangeInput(event)}
                    type="text"
                />

                <label> you Age: </label>
                <input
                    value={Age}
                    onChange={(event) => handleOnchangeAge(event)}
                    type="text"
                />
                <button> Submit </button>
            </form>
        </div>
    )
}

export default AddUserInfor