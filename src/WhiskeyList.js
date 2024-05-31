import React, { useEffect, useState } from 'react';
import whiskeysData from './products.json'; // Import the JSON file

const WhiskeyList = () => {
    const [whiskeys, setWhiskeys] = useState([]);

    useEffect(() => {
        setWhiskeys(whiskeysData);
    }, []);

    return (
        <div className="whiskey-list">
            <h2>Current Whiskeys</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Price</th>
                        <th>Featured</th>
                    </tr>
                </thead>
                <tbody>
                    {whiskeys.map(whiskey => (
                        <tr key={whiskey.id}>
                            <td>{whiskey.name}</td>
                            <td>{whiskey.id}</td>
                            <td>{whiskey.price}</td>
                            <td>{whiskey.featured ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WhiskeyList;