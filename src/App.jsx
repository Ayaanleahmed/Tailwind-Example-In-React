import React, { useState } from 'react';

const FetchApiUser = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiGet = async () => {
        setLoading(true);
        setError(null);
        try {
            const Apitest = await fetch("https://randomuser.me/api/?results=10");
            const jsonData = await Apitest.json();
            console.log(jsonData);  
            setData(jsonData.results.slice(0, 3));  
        } catch (error) {
            setError(" fetching Filed");
            console.error("fetching Filed: ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
        <div className="container mx-auto p-4 bg-blue-100 shadow-lg rounded-lg text-center my-10">
           <div className="text-blue-700 text-5xl underline pr-28">View Informatin In Api</div>
            <br />
            {loading && <p className="text-gray-600">Loading...</p>}
            {error && <p className="text-red-500">{Error}</p>}
            <div>
            </div>
                {data.map(user => (
                    <div key={user.login.uuid} className="user-card flex items-center border rounded-lg p-4 my-4 bg-gray-100 shadow-md">
                        <div>
                            <img src={user.picture.medium} className="w-20 h-20 rounded-full mr-4"/>
                        </div>
                        <div className="user-info flex flex-col">
                            <p className="text-gray-800">id: {user.login.uuid}</p>
                            <p className="text-gray-800">name: {user.name.first} {user.name.last}</p>
                        </div>
                    </div>
                ))}
                 <button
                onClick={apiGet}
                className="px-4 py-2 mt-4 bg-slate-500 text-white font-semibold rounded hover:bg-red-700"
            >
              Changing... Api Information
            </button>
            </div>
           
        </div>
    );
}

export default FetchApiUser;