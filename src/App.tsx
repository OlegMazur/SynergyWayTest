import { useEffect, useState } from 'react';
import rawData from './data/companies-lookup.json';
import './App.css';
import { Company } from './types/company_type';
import { getAll, getById } from './fake_api/fakeApi';
import CompanyInfo from './components/company_info';


function App() {
    const [companies, setCompanies] = useState<Company[]>([]);
    
    useEffect(() => {
        const data = getAll<Company>(rawData as Company[]); 
        setCompanies(data);
        const company = getById(rawData,"com_qzEByJ")
        console.log(company)
    }, []);
    
    return (
        <div>
            {companies.map((company) => (
                <CompanyInfo key={company.id} data={company}/>
            ))}
        </div>
    );
}

export default App;
