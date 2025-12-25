import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface AuthContextType {
  isAdminAuthenticated: boolean;
  adminToken: string | null;
  loginAdmin: (email: string, password: string) => Promise<boolean>;
  logoutAdmin: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE_URL = "http://localhost:5000/api";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [adminToken, setAdminToken] = useState<string | null>(null);

  /**
   * Restore token on refresh
   */
  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (storedToken) {
      setAdminToken(storedToken);
    }
  }, []);

  /**
   * Admin login (real backend)
   */
  const loginAdmin = useCallback(async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        return false;
      }

      const data = await res.json();

      localStorage.setItem("adminToken", data.token);
      setAdminToken(data.token);

      return true;
    } catch (error) {
      console.error("Admin login failed", error);
      return false;
    }
  }, []);

  /**
   * Logout admin
   */
  const logoutAdmin = useCallback(() => {
    localStorage.removeItem("adminToken");
    setAdminToken(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        adminToken,
        isAdminAuthenticated: !!adminToken,
        loginAdmin,
        logoutAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
