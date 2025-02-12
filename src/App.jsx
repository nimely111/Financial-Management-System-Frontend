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
import UserPage from "./pages/UserPage";
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";
import { userService, transactionService, handleApiError } from "./apiService";
import { toast } from "react-toastify";

const App = () => {
  // User operations with error handling
  const addUser = async (newUser) => {
    try {
      const data = await userService.createUser(newUser);
      toast.success("User added successfully!");
      return data;
    } catch (error) {
      toast.error(handleApiError(error));
      throw error;
    }
  };

  const deleteUser = async (user) => {
    try {
      await userService.deleteUser(user.id);
      toast.success("User deleted successfully!");
    } catch (error) {
      toast.error(handleApiError(error));
      throw error;
    }
  };

  const updateUser = async (id, user) => {
    try {
      const data = await userService.updateUser(id, user);
      toast.success("User updated successfully!");
      return data;
    } catch (error) {
      toast.error(handleApiError(error));
      throw error;
    }
  };

  // Transaction operations
  const addTransaction = async (newTransaction) => {
    try {
      const data = await transactionService.createTransaction(newTransaction);
      toast.success("Transaction added successfully!");
      return data;
    } catch (error) {
      toast.error(handleApiError(error));
      throw error;
    }
  };

  // Loader function
  const userLoader = async ({ params }) => {
    try {
      return await userService.getUser(params.id);
    } catch (error) {
      toast.error(handleApiError(error));
      throw error;
    }
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
          element={
            <EditUserPage
              updateUserSubmit={updateUser}
              createTransactionSubmit={addTransaction}
            />
          }
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
