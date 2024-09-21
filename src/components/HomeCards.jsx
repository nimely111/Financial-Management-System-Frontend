import { Link } from 'react-router-dom';
import Card from './Card';

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg'>
          <Card>
            <h2 className='text-2xl font-bold'>For Staffs</h2>
            <p className='mt-2 mb-4'>
              Browse our Club Admissions and start your savings today.
            </p>
            <Link
              to='/users'
              className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
            >
              Browse Admissions
            </Link>
          </Card>
          <Card bg='bg-green-100'>
            <h2 className='text-2xl font-bold'>For Admin</h2>
            <p className='mt-2 mb-4'>
              Sign up for admission and experience the perfect platform for your savings.
            </p>
            <Link
              to='/add-user'
              className='inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600'
            >
              New Admission
            </Link>
          </Card>
          <Card bg='bg-blue-100'>
            <h2 className='text-2xl font-bold'>Total Admissions</h2>
            <h3 className='font-bold text-5xl mt-2 mb-4'>
              200
            </h3>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;
