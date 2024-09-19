import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserListing = ({ user }) => {

  return (
    <div className='bg-white rounded-xl shadow-md relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-gray-600 my-2'>{user.type}</div>
          <h3 className='text-xl font-bold'>{user.title}</h3>
        </div>
        <h3 className='text-green-500 mb-2'>{user.salary} / Year</h3>

        <div className='border border-gray-100 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='text-orange-700 mb-3'>
            <FaMapMarker className='inline text-lg mb-1 mr-1' />
            {user.location}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserListing;
