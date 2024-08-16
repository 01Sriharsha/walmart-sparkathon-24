// import React, { createContext, useContext, useState, useEffect} from 'react';
// import Cookies from 'js-cookie';
// import axios from 'axios';

// interface AuthContextType {
//   isAuthenticated: boolean;
//   login: (data: { walmartID: string; password: string }) => Promise<void>;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

//   useEffect(() => {
//     const token = Cookies.get('token');
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const login = async ({ walmartID, password }: { walmartID: string; password: string }) => {
//     try {
//       const response = await axios.post('http://localhost:8000/admin/signIn', { walmartID, password }, {
//         withCredentials: true,
//       });
//       if (response.data.token) {
//         Cookies.set('token', response.data.token, { expires: 7 });
//         setIsAuthenticated(true);
//       } else {
//         throw new Error('No token received');
//       }
//     } catch (error: unknown) {
//       if (axios.isAxiosError(error)) {
//         const message = error.response?.data?.message || 'Login failed';
//         throw new Error(message);
//       } else {
//         throw new Error('An unexpected error occurred');
//       }
//     }
//   };

//   const logout = () => {
//     Cookies.remove('token');
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export { AuthProvider, useAuth };



import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

interface AuthContextType {
  isAuthenticated: boolean;
  role: string;
  login: (data: { walmartID: string; password: string }) => Promise<void>;
  logout: () => void;
  setRole: (role: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [role, setRole] = useState<string>('');

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsAuthenticated(true);
      // Optionally, you could fetch user role here if it's stored in the backend
    }
  }, []);

  const login = async ({ walmartID, password }: { walmartID: string; password: string }) => {
    try {
      const response = await axios.post('http://localhost:8000/admin/signIn', { walmartID, password }, {
        withCredentials: true,
      });
      if (response.data.token) {
        Cookies.set('token', response.data.token, { expires: 7 });
        setIsAuthenticated(true);
        setRole(response.data.role); // Assuming the response includes the user's role
      } else {
        throw new Error('No token received');
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || 'Login failed';
        throw new Error(message);
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
    setRole(''); // Clear the role upon logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
