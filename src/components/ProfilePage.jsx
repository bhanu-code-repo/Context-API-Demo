import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
  const { isLoggedIn, username, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Profile</div>
            <div className="card-body">
              {isLoggedIn ? (
                <div>
                  <p>Welcome, {username}!</p>
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              ) : (
                <p>Please login to view your profile.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
