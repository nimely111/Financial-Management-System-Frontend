import React from "react";

const SavingsTable = ({ records }) => {
  return (
    <div>
      <h3 className="text-green-700 text-lg font-bold mb-2">
        Saving's History
      </h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b text-center">{record.date}</td>
              <td
                className={`py-2 px-4 border-b text-center ${
                  record.isPaid ? "text-green-600" : "text-red-600"
                }`}
              >
                {record.isPaid ? "Paid" : "Not Paid"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavingsTable;
