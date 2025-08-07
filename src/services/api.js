const API_BASE_URL = "http://localhost:3004/api/v1";

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Helper method to get auth headers
  getAuthHeaders() {
    const token = localStorage.getItem("authToken");
    return {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }

  // Helper method to handle API responses
  async handleResponse(response) {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  }

  // Authentication methods
  async login(credentials, orgId) {
    try {
      let url;
      if (orgId) {
        url = `${this.baseURL}/auth/login?org_id=${orgId}`;
      } else {
        `${this.baseURL}/auth/login`;
      }
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await this.handleResponse(response);

      // Store token and user data
      if (data.data?.access_token) {
        const { access_token, refresh_token, ...rest } = data.data;
        localStorage.setItem("authToken", data.data.access_token);
        localStorage.setItem("userData", JSON.stringify(rest));
      }

      return data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  async register(userData) {
    try {
      const response = await fetch(`${this.baseURL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await this.handleResponse(response);

      // Store token and user data if registration includes login
      if (data.data?.token) {
        localStorage.setItem("authToken", data.data.token);
        localStorage.setItem("userData", JSON.stringify(data.data.member));
      }

      return data;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  }

  async searchCooperative(searchData) {
    try {
      const response = await fetch(`${this.baseURL}/auth/search-cooperative`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchData),
      });
      const data = await this.handleResponse(response);
      if (data.data) {
        localStorage.setItem("login:cooperativeId", JSON.stringify(data.data));
      }
      return data;
    } catch (error) {
      console.error("Tenant search error:", error);
      throw error;
    }
  }

  async registerTenant(tenantData) {
    try {
      const response = await fetch(`${this.baseURL}/tenants/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tenantData),
      });

      const data = await this.handleResponse(response);

      // Store tenant data
      if (data.data?.tenant) {
        localStorage.setItem("tenantData", JSON.stringify(data.data.tenant));
      }

      return data;
    } catch (error) {
      console.error("Tenant registration error:", error);
      throw error;
    }
  }

  async logout() {
    try {
      // Clear local storage
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData");

      // Optionally call logout endpoint if backend has one
      const token = localStorage.getItem("authToken");
      if (token) {
        await fetch(`${this.baseURL}/auth/logout`, {
          method: "POST",
          headers: this.getAuthHeaders(),
        });
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  }

  async getProfile() {
    try {
      const response = await fetch(`${this.baseURL}/auth/profile`, {
        method: "GET",
        headers: this.getAuthHeaders(),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error("Get profile error:", error);
      throw error;
    }
  }

  async resetPassword(email, tenantId) {
    try {
      const response = await fetch(`${this.baseURL}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, tenantId }),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error("Reset password error:", error);
      throw error;
    }
  }

  async changePassword(passwords) {
    try {
      const response = await fetch(`${this.baseURL}/auth/change-password`, {
        method: "PUT",
        headers: this.getAuthHeaders(),
        body: JSON.stringify(passwords),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error("Change password error:", error);
      throw error;
    }
  }

  // Dashboard methods
  async getDashboardData() {
    try {
      const response = await fetch(`${this.baseURL}/dashboard/member`, {
        method: "GET",
        headers: this.getAuthHeaders(),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error("Get dashboard data error:", error);
      throw error;
    }
  }

  // Member methods
  async getMembers(params = {}) {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`${this.baseURL}/members?${queryString}`, {
        method: "GET",
        headers: this.getAuthHeaders(),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error("Get members error:", error);
      throw error;
    }
  }

  async getMember(memberId) {
    try {
      const response = await fetch(`${this.baseURL}/members/${memberId}`, {
        method: "GET",
        headers: this.getAuthHeaders(),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error("Get member error:", error);
      throw error;
    }
  }

  // Loan methods
  async getLoans(params = {}) {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`${this.baseURL}/loans?${queryString}`, {
        method: "GET",
        headers: this.getAuthHeaders(),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error("Get loans error:", error);
      throw error;
    }
  }

  async createLoan(loanData) {
    try {
      const response = await fetch(`${this.baseURL}/loans`, {
        method: "POST",
        headers: this.getAuthHeaders(),
        body: JSON.stringify(loanData),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error("Create loan error:", error);
      throw error;
    }
  }

  // Contribution methods
  async getContributions(params = {}) {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(
        `${this.baseURL}/contributions?${queryString}`,
        {
          method: "GET",
          headers: this.getAuthHeaders(),
        }
      );

      return await this.handleResponse(response);
    } catch (error) {
      console.error("Get contributions error:", error);
      throw error;
    }
  }

  async createContribution(contributionData) {
    try {
      const response = await fetch(`${this.baseURL}/contributions`, {
        method: "POST",
        headers: this.getAuthHeaders(),
        body: JSON.stringify(contributionData),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error("Create contribution error:", error);
      throw error;
    }
  }

  // Utility methods
  isAuthenticated() {
    return !!localStorage.getItem("authToken");
  }

  getCurrentUser() {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  }

  getToken() {
    return localStorage.getItem("authToken");
  }

  getOrgId() {
    const data = localStorage.getItem("login:cooperativeId");
    return JSON.parse(data);
  }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService;
