import React, { useEffect, useState } from "react";
import {
  Mosaic,
  MosaicWindow,
  MosaicDirection,
  MosaicPath,
  MosaicNode,
} from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";
import "./App.css";
import { Company } from "./types/company_type";
import rawData from "./data/companies-lookup.json";
import { getAll } from "./fake_api/fakeApi";
import CompanyInfo from "./components/company_info";

const App: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [companyMap, setCompanyMap] = useState<Record<string, Company>>({});
  const [visibleIds, setVisibleIds] = useState<string[]>([]);

  useEffect(() => {
    const data = getAll<Company>(rawData as Company[]);
    setCompanies(data);

    const map: Record<string, Company> = {};
    data.forEach((company: Company) => {
      map[company.id] = company;
    });
    setCompanyMap(map);
    setVisibleIds(data.slice(0, 3).map((c) => c.id));
  }, []);

  const renderTile = (id: string, path: MosaicPath) => {
    const company = companyMap[id];
    return (
      <MosaicWindow<string>
        path={path}
        createNode={() => "new"}
        title={company ? company.name : "Unknown Company"}
      >
        <div>
          {company ? (
            <CompanyInfo data={company} />
          ) : (
            <div>No company data available</div>
          )}
        </div>
      </MosaicWindow>
    );
  };

  const createMosaicTree = (ids: string[]): MosaicNode<string> | null => {
    if (ids.length === 0) return null;
    if (ids.length === 1) return ids[0];
    return {
      direction: "row" as MosaicDirection,
      first: ids[0],
      second: createMosaicTree(ids.slice(1))!,
    };
  };

  const handleAddCompany = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    if (selectedId && !visibleIds.includes(selectedId)) {
      setVisibleIds((prev) => [...prev, selectedId]);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 p-4">
      <div className="mb-4">
        <label htmlFor="company-select" className="mr-2">Add Company:</label>
        <select id="company-select" onChange={handleAddCompany} className="p-2 border rounded">
          <option value="">Select a company</option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
      </div>
      <Mosaic<string> renderTile={renderTile} initialValue={createMosaicTree(visibleIds)} />
    </div>
  );
};

export default App;
