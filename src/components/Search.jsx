{/* shadow-md */ }
import { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCriteria, setFilterCriteria] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://api.spacexdata.com/v3/rockets?q=${searchTerm}&filter=${filterCriteria}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div className="search-section">
            <div className="">
                <div className="px-4 md:px-16 lg:px-32 xl:px-48">
                    <div className="flex justify-center md:flex-1">
                        <div className='p-2'>
                            <input type="text" id="keyword" name="keyword" placeholder="Keyword" value={searchTerm} className="w-full border rounded-md px-3 py-2" onChange={(e) => setSearchTerm(e.target.value)} />
                        </div>
                        <div className='p-2'>
                            <select value={filterCriteria}
                                onChange={(e) => setFilterCriteria(e.target.value)} name="category" className="w-full border rounded-md px-3 py-2">
                                <option value="">No Filter</option>
                                <option value="active">Status</option>
                                <option value="first_flight">Original Launch</option>
                                <option value="rocket_type">Type</option>
                            </select>
                        </div>
                        <button className="search-btn p-2" onClick={handleSearch}>Search</button>
                    </div>
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.id}>{result.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Search