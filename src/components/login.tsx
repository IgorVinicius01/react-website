import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

function Login() {

  const users = [
    {username: "admin", password: "12345"},
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if(user) {
      navigate("/home");
    } else {
      setShowAlert(true);
      
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <div 
      className="flex h-screen justify-center items-center bg-linear-to-b from-blue-100 via-blue-200 to-blue-300">
      <div 
        className="flex flex-col w-100 bg-gray-100 rounded-3xl shadow-lg mx-4">
        <div className="w-full">
          <h1 
            className="flex font-bold justify-center text-3xl font-sans py-8">
              Welcome!
          </h1>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault()
          console.log("Form enviado")
        }}>

          <div className="flex flex-col w-full mt-12 mb-8 px-4">
            <label 
              className="text-sm p-1.5 font-bold">
                Username
            </label>
            <Input 
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-4 w-full h-10"
              required/>
            <label 
              className="text-sm p-1.5 font-bold">
              Password
            </label>
            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="mb-4 w-full h-10"
              required/>
            
            <Link
              to="/"
              className="text-sm text-blue-600 font-bold text-right hover:underline"
            >
              Forgot password?
            </Link>
            
          </div>

          <div 
            className="flex w-full px-4 pb-6">
            <Button 
              type="submit"
              onClick={handleLogin}
              className="w-full cursor-pointer">
                Sign up
            </Button>
          </div>
        </form>
        
      </div>
            
      {showAlert && (
        <Alert
          variant="destructive"
          className="fixed bottom-16 left-1/2-translate-x-1/2 w-100 bg-red-50
            border border-red-300 shadow-lg z-50">
          <AlertTitle>Invalid Credentials</AlertTitle>
          <AlertDescription>
            Verify your login and password.
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}

export default Login;