import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import UserListings from "../components/UserListings";
import ViewAllUsers from "../components/ViewAllUsers";

const HomePage = () => {
  return (
    // place all components in the homepage nestead of the app.jsx file
    <>
      <Hero />
      <HomeCards />
      <UserListings isHome={true} />
      <ViewAllUsers />
    </>
  );
};
export default HomePage;
