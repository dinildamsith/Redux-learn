import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addCustomer} from "./customerActions.js";


export default function CustomerForm(){

    const [customerId, setCustomerId] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerContact, setCustomerContact] = useState('');
    const [customerAge, setCustomerAge] = useState('');


    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customer.customers || []);

    const handheldSubmit =()=>{
        const newCustomer = {
            id:customerId,
            name:customerName,
            contact:customerContact,
            age:customerAge
        }

        dispatch(addCustomer(newCustomer))

    }





    return(
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Customer Details</h2>

                    <form className="space-y-4">
                        {/* Customer ID */}
                        <div>
                            <label htmlFor="customer-id" className="block text-sm font-medium text-gray-700">
                                Customer ID
                            </label>
                            <input
                                type="text"
                                id="customer-id"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter customer ID"
                                onChange={event => setCustomerId(event.target.value)}
                            />
                        </div>


                        {/* Customer Name */}
                        <div>
                            <label htmlFor="customer-name" className="block text-sm font-medium text-gray-700">
                                Customer Name
                            </label>
                            <input
                                type="text"
                                id="customer-name"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter customer name"
                                onChange={event => setCustomerName(event.target.value)}
                            />
                        </div>

                        {/* Customer Contact */}
                        <div>
                            <label htmlFor="customer-contact" className="block text-sm font-medium text-gray-700">
                                Contact
                            </label>
                            <input
                                type="tel"
                                id="customer-contact"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter customer contact number"
                                onChange={event => setCustomerContact(event.target.value)}
                            />
                        </div>

                        {/* Customer Age */}
                        <div>
                            <label htmlFor="customer-age" className="block text-sm font-medium text-gray-700">
                                Age
                            </label>
                            <input
                                type="number"
                                id="customer-age"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter customer age"
                                onChange={event => setCustomerAge(event.target.value)}
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                onClick={handheldSubmit}
                                type="button"
                                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                            >
                                Submit
                            </button>

                            <button
                                type="button"
                                className="w-full py-2 px-4 bg-[yellow] text-black font-semibold rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                            >
                                Update
                            </button>

                            <button
                                type="button"
                                className="w-full py-2 px-4 bg-[red] text-white font-semibold rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                            >
                                Delete
                            </button>
                        </div>
                    </form>
                </div>

                {/* Table for displaying collected data */}
                <div className="mt-10 w-full max-w-4xl">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                Customer ID
                            </th>
                            <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                Customer Name
                            </th>
                            <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                Contact
                            </th>
                            <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                Age
                            </th>
                        </tr>
                        </thead>
                        <tbody>

                        {customers.map((customer, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.contact}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.age}</td>
                            </tr>
                        ))}

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}