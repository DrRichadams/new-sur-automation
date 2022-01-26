import db from "../../../firebase";
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDocs, 
} from "firebase/firestore";

export const toggleEditingMode = (current) => {
  return (dispatch) =>
    dispatch({ type: "TOGGLE_EDITING_MODE", payload: current });
};

export const addIdentificationDataToFirestore = (goodData) => {
  //FIRESTORE COMMUNICATION HERE
  ///////////////////////////////////
  const addNew = async () => {
    const docRef = doc(db, "identification", "first_identity_1");
    const payload = goodData;
    await setDoc(docRef, payload);
  };
  addNew();
  console.log("Data added to firebase");
  ///////////////////////////////////
  return (dispatch) => dispatch({ type: "IDE_UPDATE_DATA", payload: goodData });
};
