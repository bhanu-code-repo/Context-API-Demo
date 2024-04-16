import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h1 className="text-center">Authentication with Context API</h1>
        <LoginPage />
        <hr />
        <ProfilePage />
      </div>
    </AuthProvider>
  );
}

export default App;
