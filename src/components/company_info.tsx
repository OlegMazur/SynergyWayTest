
import { Company } from "../types/company_type";
interface CompanyInfoProps {
  data: Company;
}
const CompanyInfo: React.FC<CompanyInfoProps> = ({ data }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h1 className="text-xl font-bold mb-4">Company Info</h1>
      <div className="flex flex-col space-y-4">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex">
            <span className="w-1/3 font-bold text-gray-800 capitalize">
              {key.replace(/_/g, " ")}:
            </span>
            <span className="w-2/3 text-gray-800">{value || "N/A"}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CompanyInfo;
