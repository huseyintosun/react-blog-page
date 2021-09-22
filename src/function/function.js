import firebase from '../firebase/firebase';
import React, { useState, useEffect } from 'react'
import {successToastify} from '../utils/customToastify'



export const addInfo = (info) => {
    const cardRef = firebase.database().ref("card")
    cardRef.push(info)
}

export const useFetch = () => {
    const [contactList, setContactList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true);
        const cardRef = firebase.database().ref("card")
        cardRef.on("value", (snapshot)=>{
            const cards = snapshot.val();
            const contactArray = [];
            for (let id in cards) {
                contactArray.push({id,...cards[id]})
            }
            setContactList(contactArray)
            setIsLoading(false)
        })
    }, [])
    return {contactList,isLoading}
}

export const deleteHandler = (id) => {
    const cardRef = firebase.database().ref("card").child(id);
    cardRef.remove();
    successToastify("Deleted Succesfully")
}

export const editHandler = (info) => {
    const cardRef = firebase.database().ref("card").child(info.id);
    cardRef.update(info)
    successToastify("Updated Succesfully")
}