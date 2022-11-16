import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg"

//stateless(compoment không có state có thể xử dụng class hoặc function) vs stateful(compoment có state chỉ có thể xử dụng class)
// class DipslayInfor extends React.Component {
//     // constructor(props) {
//     //     console.log("1")
//     //     super(props)
//     //     // babel compliler  
//     //     this.state = {
//     //         check: true
//     //     }
//     // }

//     // handleShowHide = () => {
//     //     this.setState({
//     //         check: !this.state.check
//     //     })
//     // }

//     // componentDidMount() {
//     //     console.log("3")
//     //     setTimeout(() => {
//     //         document.title = "khanh Sky"
//     //     }, 3000);
//     // }
//     // componentDidUpdate(prevProps,prevState,snapshot) {
//     //     console.log("so sanh ",prevProps, this.props)
//     //     if(this.props.ListUsers !== prevProps.ListUsers) {
//     //         if(this.props.ListUsers.length == 5) {
//     //             alert('5')
//     //         }
//     //     }
//     // }

//     render() {
//         // props => viết tắt properties
//         const { ListUsers } = this.props
//         // console.log("2")
//         return (
//             <div className="display-infor-container">
//                 {/* <div > */}
//                 {/* <img src={logo} /> */}
//                 {/* <span onClick={(event) => { this.handleShowHide() }} >
//                         {this.state.check === true ? "hide list users :" : "show list users :"}
//                     </span>
//                 </div> */}

//                 {true &&
//                     <>
//                         {ListUsers.map((value) => {
//                             return (
//                                 <div key={value.id} className={+value.age > 18 ? "green" : "red"}>
//                                     <div> My name's  {value.name}</div>
//                                     <div> My name's  {value.age}</div>
//                                     <button onClick={() => { this.props.handleDeleteuser(value.id) }} > Delete </button>
//                                     <hr></hr>
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }
const DipslayInfor = (props) => {
    const { ListUsers } = props
    const [isShowHideListUser, setShowHideListUser] = useState(true)

    const handleShowHide = () => {
        setShowHideListUser(!isShowHideListUser)
    }

    // bản chất của thằng hook ra đời là chia nhỏ các State 
    // props => viết tắt properties

    return (

        <div className="display-infor-container">

            {/* <div > */}
            {/* <img src={logo} /> */}
            {/* <span onClick={(event) => { this.handleShowHide() }} >
                        {this.state.check === true ? "hide list users :" : "show list users :"}
                    </span>
                </div> */}

            <div onClick={(event) => { handleShowHide() }}>
                {isShowHideListUser === true ? "hide list users :" : "show list users :"}
            </div>


            {isShowHideListUser &&
                <>
                    {ListUsers.map((value) => {
                        return (
                            <div key={value.id} className={+value.age > 18 ? "green" : "red"}>
                                <div> My name's  {value.name}</div>
                                <div> My name's  {value.age}</div>
                                <button onClick={() => { props.handleDeleteuser(value.id) }} > Delete </button>
                                <hr></hr>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}
export default DipslayInfor