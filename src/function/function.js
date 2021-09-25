import firebase from '../firebase/firebase';
import React, { useState, useEffect } from 'react'
import {successToastify} from '../utils/customToastify'



export const addInfo = (info) => {
    const cardRef = firebase.database().ref("card")
    cardRef.push(info)
}

export const useFetch = () => {
    const [cardList, setCardList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true);
        const cardRef = firebase.database().ref("card")
        cardRef.on("value", (snapshot)=>{
            const cards = snapshot.val();
            const cardArray = [];
            for (let id in cards) {
                cardArray.push({id,...cards[id]})
            }
            setCardList(cardArray)
            setIsLoading(false)
        })
    }, [])
    return {cardList,isLoading}
}

export const deleteHandler = (id) => {
    const cardRef = firebase.database().ref("card").child(id);
    cardRef.remove();
    console.log("removed")
    successToastify("Deleted Succesfully")
}

export const editHandler = (info) => {
    const cardRef = firebase.database().ref("card").child(info.id);
    cardRef.update(info)
    successToastify("Updated Succesfully")
}