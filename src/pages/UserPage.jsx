import { useState } from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import SavingsTable from '../components/SavingsTable';
import AddRecordForm from '../components/AddRecordForm';
import logo from '../assets/images/accnt-finance-logo.png'

const UserPage = ({ deleteUser }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useLoaderData();

  const [records, setRecords] = useState([]) //Records state to track savings history


  const onDeleteClick = (userId) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this listing?'
    );

    if (!confirm) return;

    deleteUser(userId);

    toast.success('User deleted successfully');

    navigate('/users');
  };

  const addRecord = (record) => {
    setRecords([...records, record]);
  }

  return (
    <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/users'
            className='text-green-500 hover:text-green-600 flex items-center'
          >
            {/* backward arrow */}
            <FaArrowLeft className='mr-2' /> Back to Admission Listings
          </Link>
        </div>
      </section>

      <section className='bg-green-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <span>
                  <img className='-mt-3 mb-5 md:w-28 md:h-28 md:mx-0 sm:mx-auto sm:h-28 sm:w-28 rounded-full' src={logo} alt={logo} />
                </span>
                <div className='text-gray-500 mb-4'>{user.type}</div>
                <h1 className='text-3xl font-bold mb-4'>{user.name}</h1>
                <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-1' />
                  <p className='text-orange-700'>{user.location}</p>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>

                <p className='mb-4'>{user.about}</p>

                <h3 className='text-green-800 text-lg font-bold mb-2'>
                  Saving's Amount
                </h3>

                <p className='mb-4'>{user.saving}
                  <span className='ml-1'>{user.currency}</span>
                </p>
              </div>

              {/* user details saving table */}
                 <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                  <h3 className='text-green-800 text-lg font-bold mb-2'>
                    Add New Savings Record
                    </h3>
                   <AddRecordForm addRecord={addRecord} />
                </div>
             
              {/* Savings History Table */}
              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <SavingsTable records={records} />
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>User Info</h3>

                <h2 className='text-2xl'>{user.city.name}</h2>

                <p className='my-2'>{user.city.about}</p>

                <hr className='my-4' />

                <h3 className='text-xl'>Contact Email:</h3>

                <p className='my-2 bg-green-100 p-2 font-bold'>
                  {user.city.contactEmail}
                </p>

                <h3 className='text-xl'>Contact Phone:</h3>

                <p className='my-2 bg-green-100 p-2 font-bold'>
                  {' '}
                  {user.city.contactPhone}
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-xl font-bold mb-6'>Manage User</h3>
                <Link
                  to={`/edit-user/${user.id}`}
                  className='bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Edit User
                </Link>
                <button
                  onClick={() => onDeleteClick(user.id)}
                  className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Delete User
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const userLoader = async ({ params }) => {
  const res = await fetch(`/api/users/${params.id}`);
  const data = await res.json();
  return data;
};

export { UserPage as default, userLoader };
