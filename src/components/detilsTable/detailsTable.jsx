export default function DetailsTable(){

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

                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">user1@example.com</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">user1</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">user2@example.com</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">user2</td>
                        </tr>

                        </tbody>
                    </table>


                    <div className="mt-6 flex justify-end space-x-4">
                        <button
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