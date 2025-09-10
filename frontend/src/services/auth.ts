import api from "@/api";
import { LoginData, RegisterData } from "@/interfaces/IAuth";
import { handleApiError } from "@/utils/handleApiError";

export const login = async (userDataLogin: LoginData) => {
    try {
        const response = await api.post("/auth/login", userDataLogin);
        return response.data.data
    } catch (error) {
        handleApiError(error, "Login Failed");
        throw error;
    }
}

export const register = async (userDataRegist: RegisterData) => {
    try {
        const response = await api.post("/auth/register", userDataRegist);
        console.log(response)
        return response.data.data;
    } catch (error) {
        handleApiError(error, "Register Failed");
        throw error;  
    }
}

export const profile = async (token: string) => {
    try {
        const response = await api.get("/auth/profile", {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data
    } catch (error) {
        handleApiError(error, "Get Profile Failed");
    }
}

export const logout = () => {
    localStorage.removeItem("token");
}