export const getToken = (): string | null => {
  return localStorage.getItem("adminToken");
};

export const isAdminLoggedIn = (): boolean => {
  return !!getToken();
};
