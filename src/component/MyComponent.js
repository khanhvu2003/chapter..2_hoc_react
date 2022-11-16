// class component 
// function component

import React, { useState } from "react";
import DipslayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";



// class MyComponent extends React.Component {
//     // jsx 
//     state = {
//         Listusers: [
//             { id: 1, name: "khánh vũ", age: "19" },
//             { id: 2, name: "Linh vũ", age: "17" },
//             { id: 3, name: "Minh vũ", age: "4" },
//             { id: 4, name: "Khởi vũ", age: "42" },
//         ]
//     }

//     handleAddNewUser = (UserObj) => {
//         this.setState({
//             Listusers: [UserObj, ...this.state.Listusers]
//         })
//     }

//     handleDeleteuser = (userId) => {
//         let ListusersClone = this.state.Listusers
//         ListusersClone = ListusersClone.filter((item) => item.id !== userId);
//         this.setState({
//             Listusers: ListusersClone
//         })
//     }
//     render() {
//         // const myInfor = [10,20,67]
//         // DRY : don't repeat yousefl
//         return (
//             <>
//                 <div className="a">
//                     khánh Skyle
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br></br>
//                     <DipslayInfor
//                         ListUsers={this.state.Listusers}
//                         handleDeleteuser={this.handleDeleteuser}
//                     />
//                 </div>
//                 <div className="b">

//                 </div>
//             </>
//         )
//     }

//     handleClick(event) {
//         console.log(" my name is : ", this.state.name)

//         // merge State => react class
//         this.setState({
//             name: " Vũ Ngọc Khánh",
//             age: Math.floor((Math.random() * 100) + 1)
//         })
//     }

//     handleOnMoverOver(event) {
//         // console.log("hover me");
//     }
// }



const MyComponent = (props) => {
    const [ListUsers, setListUsers] = useState([
        { id: 2, name: "Linh vũ", age: "17" },
        { id: 3, name: "Minh vũ", age: "4" },
        { id: 4, name: "Khởi vũ", age: "42" },
    ])

    const handleAddNewUser = (UserObj) => {
        setListUsers([UserObj,...ListUsers])   
    }


    const handleDeleteuser = (userId) => {
        let ListusersClone = ListUsers
        ListusersClone = ListusersClone.filter((item) => item.id !== userId);
        setListUsers(ListusersClone)
    }

    return (
        <>
            <div className="a"> 
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
                <br></br>
                <DipslayInfor
                    ListUsers={ListUsers}
                    handleDeleteuser={handleDeleteuser}
                />
            </div>
            <div className="b">

            </div>
        </>
    )
}
export default MyComponent;