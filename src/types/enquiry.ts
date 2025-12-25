import { API_BASE_URL } from "@/config/api";
import { getToken } from "@/utils/auth";

/**
 * 🔹 Backend-aligned enquiry status
 */
export type EnquiryStatus = "new" | "in_progress" | "resolved";

/**
 * 🔹 Status labels for UI display
 */
export const EnquiryStatusLabel: Record<EnquiryStatus, string> = {
  new: "New",
  in_progress: "Contacted",
  resolved: "Closed",
};

/**
 * 🔹 Enquiry model (matches backend response)
 */
export interface Enquiry {
  id: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: EnquiryStatus;
  createdAt: string;
  updatedAt: string;
}

/**
 * 🔹 Payload for submitting a new enquiry (public)
 */
export interface SubmitEnquiryPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

/**
 * 🔐 ADMIN: Update enquiry status
 */
export const updateEnquiryStatus = async (
  id: number,
  status: EnquiryStatus
): Promise<Enquiry> => {
  const res = await fetch(
    `${API_BASE_URL}/admin/enquiries/${id}/status`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ status }),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to update enquiry status");
  }

  const data = await res.json();
  return data.enquiry;
};

/**
 * 🌍 PUBLIC: Submit enquiry
 */
export const submitEnquiry = async (
  payload: SubmitEnquiryPayload
): Promise<Enquiry> => {
  const res = await fetch(`${API_BASE_URL}/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to submit enquiry");
  }

  const data = await res.json();
  return data.enquiry;
};
