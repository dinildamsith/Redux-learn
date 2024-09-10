import {useDispatch, useSelector} from "react-redux";
import {showDetails} from "./actions.js";

export default function Testing(){

    const dispatch = useDispatch();
    // Accessing the person array from the reducer
    const personArray = useSelector((state) => state.reducer.person || []);

    // Function to handle button click and dispatch action
    const handheldShowBtn = () => {
        const personData = {
            name: "Dinil",
            age: "19",
            from: "Avisawella"
        };

        dispatch(showDetails(personData));
    };

    // Check if personArray has data
    const latestPerson = personArray.length > 0 ? personArray[personArray.length - 1] : {};

    return (
        <>
            <h1>Name : {latestPerson.name || "N/A"}</h1>
            <h1>Age  : {latestPerson.age || "N/A"}</h1>
            <h1>From  : {latestPerson.from || "N/A"}</h1>
            <button className="bg-blue-600 h-10 w-16 rounded" onClick={handheldShowBtn}>Show</button>
        </>
    );
}
