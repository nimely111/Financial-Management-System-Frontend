import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import Spinner from "./Spinner";
import { BACKEND_URL } from "../api";
import { toast } from "react-toastify";
import Transactions from "./Transactions";

const UserListings = ({ isHome = false }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Set pagination to display 5 users per page

  useEffect(() => {
    const fetchUsers = async () => {
      const apiUrl = isHome
        ? `${BACKEND_URL}/users?limit=3` // Home page shows only 3 users
        : `${BACKEND_URL}/users`; // Fetch all users for other pages

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch users: ${response.statusText}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to load users. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [isHome]);

  // Pagination logic (Only applies when isHome === false)
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = isHome
    ? users
    : users.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    if (currentPage < Math.ceil(users.length / usersPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-green-500 mb-6 text-center">
          {isHome ? "Recent Admissions" : "Browse Admissions"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="overflow-auto rounded-lg shadow">
            <table className="min-w-full">
              <thead className="border-b-2 border-green-200 bg-green-500 text-white">
                <tr>
                  <th className="w-20 py-2 text-left tracking-wide px-4 border-b">
                    ID
                  </th>
                  <th className="py-2 text-left tracking-wide font-semibold px-4 border-b">
                    Name
                  </th>
                  <th className="py-2 text-left tracking-wide font-semibold px-4 border-b">
                    Saving's Type
                  </th>
                  <th className="py-2 text-left tracking-wide font-semibold px-4 border-b">
                    Location
                  </th>
                  <th className="py-2 text-left tracking-wide font-semibold px-4 border-b">
                    Saving's Amount
                  </th>
                  <th className="py-2 text-left tracking-wide font-semibold px-4 border-b">
                    Currency
                  </th>
                  <th className="py-2 text-left tracking-wide font-semibold px-4 border-b">
                    Image
                  </th>
                  <th className="py-2 text-left tracking-wide font-semibold px-4 border-b">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-100">
                {currentUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-100 text-left">
                    <td className="py-2 text-left tracking-wide px-4 border-b whitespace-nowrap">
                      <span className="font-bold text-blue-500 hover:underline hover:cursor-pointer">
                        {user.id}
                      </span>
                    </td>
                    <td className="py-2 text-left tracking-wide px-4 border-b whitespace-nowrap">
                      <span className="font-bold text-blue-500">
                        {user.firstname} {user.lastname}
                      </span>
                    </td>
                    <td>
                      <Transactions transactions={user.transactions} />
                    </td>
                    <td className="py-2 text-left tracking-wide px-4 border-b whitespace-nowrap">
                      {user.address}
                    </td>
                    <td>
                      <Transactions transactions={user.transactions} />
                    </td>
                    <td>
                      {user.transactions.length > 0 ? (
                        user.transactions.map((transaction, index) => (
                          <p key={index}>{transaction.savings_currency}</p>
                        ))
                      ) : (
                        <p>N/A</p>
                      )}
                    </td>
                    <td className="py-2 text-left tracking-wide px-4 border-b whitespace-nowrap">
                      <Avatar
                        name={`${user.firstname} ${user.lastname}`}
                        src={user.profile_picture || undefined}
                        size="50"
                        round={true}
                      />
                    </td>
                    <td className="py-2 text-left tracking-wide px-4 border-b">
                      <div className="flex space-x-2">
                        <Link
                          to={`/users/${user.id}`}
                          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                        >
                          Details
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination buttons (Only render if isHome === false) */}
        {!isHome && users.length > usersPerPage && (
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 bg-green-500 text-white rounded ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-600"
              }`}
            >
              Previous
            </button>
            <span className="px-4 py-2 bg-gray-200 rounded">
              Page {currentPage}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage >= Math.ceil(users.length / usersPerPage)}
              className={`px-4 py-2 bg-green-500 text-white rounded ${
                currentPage >= Math.ceil(users.length / usersPerPage)
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-600"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserListings;
