import {useDispatch, useSelector} from "react-redux";
import {getDetailsUsers} from "./actions.js";

export default function DetailsTable(){

    const dispatch = useDispatch();
    const accessUsersInStore = useSelector(state => state.userReducer.users || [])




    const handheldGetDataButton = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const allUsers = await response.json();
            dispatch(getDetailsUsers(allUsers))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };




    return(
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                    <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">User Information</h2>


                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        {accessUsersInStore.length > 0 ? (
                            accessUsersInStore.map((user) => (
                                <tr key={user.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.username}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3"
                                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">No data
                                    available
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>


                    <div className="mt-6 flex justify-end space-x-4">
                        <button
                            onClick={handheldGetDataButton}
                            className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                            Get Data
                        </button>
                        <button
                            className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                            Clear Data
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}