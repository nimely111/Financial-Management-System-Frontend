import { useState } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditUserPage = ({ updateUserSubmit }) => {
  const user = useLoaderData();
  const [firstname, setFirstName] = useState(user.firstname);
  const [lastname, setLastName] = useState(user.lastname);
  const [savingsType, setSavingsType] = useState(user.savings_type);
  const [address, setAddress] = useState(user.address);
  const [savingAmount, setSavingAmount] = useState(user.savings_amount);
  const [savingCurrency, setSavingCurrency] = useState(user.savings_currency);
  const [cityName, setCityName] = useState(user.city_name);
  const [contactEmail, setContactEmail] = useState(user.contact_email);
  const [contactPhone, setContactPhone] = useState(user.contact_phone);

  const navigate = useNavigate();
  const { id } = useParams();

  const submitForm = (e) => {
    e.preventDefault();

    const updatedUser = {
      id,
      firstname,
      lastname,
      savingsType,
      address,
      savingAmount,
      savingCurrency,
      cityName,
      contactEmail,
      contactPhone,
    };

    updateUserSubmit(updatedUser);

    toast.success("User Updated Successfully");

    return navigate(`/users/${id}`);
  };

  return (
    <section className="bg-green-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Update Admission
            </h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Saving's Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                value={savingsType}
                onChange={(e) => setSavingsType(e.target.value)}
              >
                <option value="Yearly">Yearly</option>
                <option value="Monthly">Monthly</option>
                <option value="Daily">Daily</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                User Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Enter Full Name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Saving's Amount
              </label>
              <input
                type="number"
                id="saving"
                name="saving"
                className="border rounded w-full py-2 px-3"
                value={savingAmount}
                onChange={(e) => setSavingAmount(e.target.value)}
              />
            </div>
            {/* saving's currency starts */}
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Currency
              </label>
              <select
                id="currency"
                name="currency"
                className="border rounded w-full py-2 px-3"
                value={savingCurrency}
                onChange={(e) => setSavingCurrency(e.target.value)}
              >
                <option value="LRD / Day">LRD / Day</option>
                <option value="USD / Day">USD / Day</option>
                <option value="LRD / Month">LRD / Month</option>
                <option value="USD / Month">USD / Month</option>
              </select>
            </div>
            {/* saving's currency ends */}

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="City Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <h3 className="text-2xl mb-5">User Info</h3>
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-gray-700 font-bold mb-2"
              >
                City Name
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="border
                rounded w-full py-2 px-3"
                placeholder="City Name"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              {/* <label
                htmlFor="city_about"
                className="block text-gray-700 font-bold mb-2"
              >
                About User
              </label> */}
              {/* <textarea
                id="about"
                name="about"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Describe yourself"
                value={aboutUser}
                onChange={(e) => setAboutUser(e.target.value)}
              ></textarea> */}
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update User
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default EditUserPage;
