import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddUserPage = ({ addUserSubmit }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [savingsType, setSavingsType] = useState("Yearly");
  const [address, setAddress] = useState("");
  const [savingAmount, setSavingAmount] = useState("");
  const [savingCurrency, setSavingCurrency] = useState("");
  const [cityName, setCityName] = useState("");
  // const [aboutUser, setAboutUser] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();

    // Validation check
    if (
      !firstname ||
      !lastname ||
      !savingsType ||
      !address ||
      !savingAmount ||
      !cityName ||
      // !aboutUser ||
      !contactEmail ||
      !contactPhone
    ) {
      toast.warning("Please fill in all fields");
      return;
    }

    // Create the new user object
    const newUser = {
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

    // Call the API
    const addedUser = await addUserSubmit(newUser);

    // Handle response
    if (addedUser) {
      toast.success("User Added Successfully");
      navigate("/users"); // Navigate only if user was successfully added
    } else {
      toast.error("Failed to add user. Please try again.");
    }
  };

  return (
    <section className="bg-green-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              New Admission
            </h2>

            <div className="mb-4">
              <label
                htmlFor="savingsType"
                className="block text-gray-700 font-bold mb-2"
              >
                Saving's SavingsType
              </label>
              <select
                id="savingsType"
                name="savingsType"
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
                User First Name
              </label>
              <input
                savingsType="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter First Name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                User Last Name
              </label>
              <input
                savingsType="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter last Name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="savingsType"
                className="block text-gray-700 font-bold mb-2"
              >
                Saving's Amount
              </label>
              <input
                savingsType="number"
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
                htmlFor="savingsType"
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
                City Address
              </label>
              <input
                savingsType="text"
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
                savingsType="text"
                id="city"
                name="city"
                className="border rounded w-full py-2 px-3"
                placeholder="City Name"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              />
            </div>
    {/* about user */}
            {/* <div className="mb-4">
             <label
                htmlFor="city_about"
                className="block text-gray-700 font-bold mb-2"
              >
                About User
              </label>
              <textarea
                id="about"
                name="about"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Describe yourself"
                value={aboutUser}
                onChange={(e) => setAboutUser(e.target.value)}
              ></textarea>
            </div> */}

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                savingsType="email"
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
                savingsType="tel"
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
                savingsType="submit"
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
