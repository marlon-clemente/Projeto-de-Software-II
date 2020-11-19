import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

// import { Container } from './styles';
const schools = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Tinkedin",
  "Tinkedin"
]

const InputSearch: React.FC = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([] as any);

  const handleChargeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }
  
  useEffect(() => {
    const result = schools.filter((s:any) => {
      s.toLowerCase().includes(search)
    })
    setSearchResult(result)
  }, [search]);
  
  return (
    <div className="input-search-school">
      <FiSearch color="#c3c3c3" size={20} />
      <input 
        type="text"
        placeholder="Procurar escola..."
        value={search}
        onChange={handleChargeSearch}
      />
      <ul>
        {searchResult.map((item:any) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default InputSearch;