import { API_BASE_URL } from "@/config/api";
import { getToken } from "@/utils/auth";

export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`${API_BASE_URL}/upload/image`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    body: formData,
  });

  const data = await res.json();
  return data.url;
};
