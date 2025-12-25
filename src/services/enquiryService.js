import { API_BASE_URL } from "../config/api";
import { getToken } from "../utils/auth";

export const fetchEnquiries = async () => {
  const res = await fetch(`${API_BASE_URL}/admin/enquiries`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return res.json();
};
