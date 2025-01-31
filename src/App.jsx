import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage, { userLoader } from "./pages/UserPage";
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";
import { BACKEND_URL } from "./api";

const App = () => {
  // // Add New User
  const addUser = async (newUser) => {
    try {
      const res = await fetch(`${BACKEND_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
    } catch (error) {}
    return;
  };

  // Delete User
  const deleteUser = async (user) => {
    const res = await fetch(`${BACKEND_URL}/users/${user.id}`, {
      method: "DELETE",
    });
    return;
  };

  // Update User
  const updateUser = async (user) => {
    const res = await fetch(`${BACKEND_URL}/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route
          path="/add-user"
          element={<AddUserPage addUserSubmit={addUser} />}
        />
        <Route
          path="/edit-user/:id"
          element={<EditUserPage updateUserSubmit={updateUser} />}
          loader={userLoader}
        />
        <Route
          path="/users/:id"
          element={<UserPage deleteUser={deleteUser} />}
          loader={userLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
