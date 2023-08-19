import React, {useEffect, useState } from 'react'
import Web3Modal from 'web3modal';
import {ethers} from 'ethers';

//internalimport

import {toDoListAddress,toDoListABI} from './constants'

const fetchContract = (signerOrProvider) => new ethers.Contract(toDoListAddress,toDoListABI,signerOrProvider);

export const toDoListContext = React.createContext();
export const toDoListProvider = ({children})=> {
    const [currentAccount, setCurrentAccount] = useState("");
    const [error, setError] = useState("");
    const [allToDooList, setallToDoList] = useState([[]]);
    const [myList, setMyList] = useState([]);

    const [allAddress,setAddress] = useState([]);

    // --------Connecting metamask
    const checkIfWalletIsConnected = async() =>{
        if(!window.ethereum) return setError("Please install metamask")

        const account= await window.ethereum.request({method: "eth_accounts"})

        if(account.length){
            setCurrentAccount(account[0])
            console.log(account)
        }else{
            setError("please Install Metamask & connect, reload")
        }
    };

    // useEffect(()=>{
    //     checkIfWallletIsConnect();
    // },[])


    return(
        <toDoListContext.Provider value={{checkIfWallletIsConnect}}>
            {children} 
        </toDoListContext.Provider>
    )
}





// const ToDolistApp = () => {
//   return (
//     <div>ToDolistApp</div>
//   )
// }

export default ToDolistApp