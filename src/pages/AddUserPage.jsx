import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddUserPage = ({ addUserSubmit }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('Yearly');
  const [location, setLocation] = useState('');
  const [saving, setSaving] = useState('');
  const [currency, setCurrency] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [aboutUser, setAboutUser] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
  
    // validation
    if (!name || !type || !location || !saving || 
        !companyName || !aboutUser || !contactEmail || !contactPhone) {
      toast.warning('Please fill in all fields');
      return; // stop submission if validation fails
    }
  
    // constructing the new user object from form fields
    const newUser = {
      name,
      type,
      location,
      saving,
      currency,
      company: {
        name: companyName,
        reasons: aboutUser,
        contactEmail,
        contactPhone,
      },
    };
  
    // submit the form
    addUserSubmit(newUser);
    
    // success toast and redirect
    toast.success('User Added Successfully');
    navigate('/users');
  };

  return (
    <section className='bg-green-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={submitForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>New Admission</h2>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Saving's Type
              </label>
              <select
                id='type'
                name='type'
                className='border rounded w-full py-2 px-3'
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value='Yearly'>Yearly</option>
                <option value='Monthly'>Monthly</option>
                <option value='Daily'>Daily</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                User Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Enter Full Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Saving's Amount
              </label>
              <input
                type='number'
                id='saving'
                name='saving'
                className='border rounded w-full py-2 px-3'
                value={saving}
                onChange={(e) => setSaving(e.target.value)}
              />
            </div>

                         {/* saving's currency starts */}
                         <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Currency
              </label>
              <select
                id='currency'
                name='currency'
                className='border rounded w-full py-2 px-3'
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value='LRD / Day'>LRD / Day</option>
                <option value='USD / Day'>USD / Day</option>
                <option value='LRD / Month'>LRD / Month</option>
                <option value='USD / Month'>USD / Month</option>
              </select>
            </div>
            {/* saving's currency ends */}

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Company Location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className='text-2xl mb-5'>Company Info</h3>

            <div className='mb-4'>
              <label
                htmlFor='company'
                className='block text-gray-700 font-bold mb-2'
              >
                Company Name
              </label>
              <input
                type='text'
                id='company'
                name='company'
                className='border rounded w-full py-2 px-3'
                placeholder='Company Name'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='company_reasons'
                className='block text-gray-700 font-bold mb-2'
              >
                Company Reasons
              </label>
              <textarea
                id='company_reasons'
                name='company_reasons'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='What does your company do?'
                value={aboutUser}
                onChange={(e) => setAboutUser(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='contact_email'
                className='block text-gray-700 font-bold mb-2'
              >
                Contact Email
              </label>
              <input
                type='email'
                id='contact_email'
                name='contact_email'
                className='border rounded w-full py-2 px-3'
                placeholder='Email address for applicants'
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='contact_phone'
                className='block text-gray-700 font-bold mb-2'
              >
                Contact Phone
              </label>
              <input
                type='tel'
                id='contact_phone'
                name='contact_phone'
                className='border rounded w-full py-2 px-3'
                placeholder='Optional phone for applicants'
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Add Admission
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddUserPage;




