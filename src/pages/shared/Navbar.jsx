
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Swal from "sweetalert2";

const Navbar = ({ user, logOut }) => {
  const handleLogOut = (event) => {
    event.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "You have successfully signed out",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Something went wrong",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          });
      }
    });
  };

  const navOptions = (
    <>
      <li className="font-bold text-base md:text-lg text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold text-base md:text-lg text-white">
        <Link to="/instructors">instructors</Link>
      </li>
      <li className="font-bold text-base md:text-lg text-white">
        <Link to="/classes">Classes</Link>
      </li>
      {user ? (
        <li className="font-bold text-base md:text-lg text-white">
          <Link to="/dashboard/profile">Dashboard</Link>
        </li>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <>
      <nav className="navbar bg-gray-900">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars className="h-5 w-5 text-green-500" />
            </button>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="flex items-center pl-8">
            {/* <img className="h-10 md:h-16" src={logo} /> */}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end pr-8">
          {!user ? (
            <p className="font-bold text-base md:text-lg text-white">
              <Link to="/login">Login</Link>
            </p>
          ) : (
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="User Avatar" />
                </div>
              </button>
              <ul className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-gray-800 rounded-box w-52">
                <li className="mb-2">
                  <Link
                    to="/dashboard/profile"
                    className="justify-between text-base text-gray-300"
                  >
                    <span className="font-bold">Profile</span>
                    <small className="pl-2 text-xs">{user.displayName}</small>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base text-white" to="dashboard/acquiredClass">
                    Dashboard
                  </Link>
                </li>
                <li className="mb-2">
                  <button className="text-base text-white" onClick={handleLogOut}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
