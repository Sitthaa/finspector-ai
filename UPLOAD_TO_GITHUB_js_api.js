// ========================================
// Red Teaming Challenge Platform - API
// ========================================

const API = {
    // Base URL for tables API
    baseUrl: 'tables',
    
    // === PROMPTS ===
    async getPrompts(filters = {}) {
        try {
            const params = new URLSearchParams(filters);
            const response = await fetch(`${this.baseUrl}/prompts?${params}`);
            if (!response.ok) throw new Error('Failed to fetch prompts');
            const result = await response.json();
            return result.data || [];
        } catch (error) {
            console.error('Error fetching prompts:', error);
            return [];
        }
    },
    
    async getPrompt(id) {
        try {
            const response = await fetch(`${this.baseUrl}/prompts/${id}`);
            if (!response.ok) throw new Error('Failed to fetch prompt');
            return await response.json();
        } catch (error) {
            console.error('Error fetching prompt:', error);
            return null;
        }
    },
    
    async createPrompt(data) {
        try {
            const response = await fetch(`${this.baseUrl}/prompts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Failed to create prompt');
            return await response.json();
        } catch (error) {
            console.error('Error creating prompt:', error);
            throw error;
        }
    },
    
    async updatePrompt(id, data) {
        try {
            const response = await fetch(`${this.baseUrl}/prompts/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Failed to update prompt');
            return await response.json();
        } catch (error) {
            console.error('Error updating prompt:', error);
            throw error;
        }
    },
    
    // === FLAGS ===
    async getFlags(filters = {}) {
        try {
            const params = new URLSearchParams(filters);
            const response = await fetch(`${this.baseUrl}/flags?${params}`);
            if (!response.ok) throw new Error('Failed to fetch flags');
            const result = await response.json();
            return result.data || [];
        } catch (error) {
            console.error('Error fetching flags:', error);
            return [];
        }
    },
    
    async getFlag(id) {
        try {
            const response = await fetch(`${this.baseUrl}/flags/${id}`);
            if (!response.ok) throw new Error('Failed to fetch flag');
            return await response.json();
        } catch (error) {
            console.error('Error fetching flag:', error);
            return null;
        }
    },
    
    async createFlag(data) {
        try {
            const response = await fetch(`${this.baseUrl}/flags`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Failed to create flag');
            return await response.json();
        } catch (error) {
            console.error('Error creating flag:', error);
            throw error;
        }
    },
    
    async updateFlag(id, data) {
        try {
            const response = await fetch(`${this.baseUrl}/flags/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Failed to update flag');
            return await response.json();
        } catch (error) {
            console.error('Error updating flag:', error);
            throw error;
        }
    },
    
    // === PARTICIPANTS ===
    async getParticipants(filters = {}) {
        try {
            const params = new URLSearchParams(filters);
            const response = await fetch(`${this.baseUrl}/participants?${params}`);
            if (!response.ok) throw new Error('Failed to fetch participants');
            const result = await response.json();
            return result.data || [];
        } catch (error) {
            console.error('Error fetching participants:', error);
            return [];
        }
    },
    
    async getParticipant(id) {
        try {
            const response = await fetch(`${this.baseUrl}/participants/${id}`);
            if (!response.ok) throw new Error('Failed to fetch participant');
            return await response.json();
        } catch (error) {
            console.error('Error fetching participant:', error);
            return null;
        }
    },
    
    async createParticipant(data) {
        try {
            const response = await fetch(`${this.baseUrl}/participants`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Failed to create participant');
            return await response.json();
        } catch (error) {
            console.error('Error creating participant:', error);
            throw error;
        }
    },
    
    async updateParticipant(id, data) {
        try {
            const response = await fetch(`${this.baseUrl}/participants/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Failed to update participant');
            return await response.json();
        } catch (error) {
            console.error('Error updating participant:', error);
            throw error;
        }
    },
    
    // === UTILITY ===
    async deleteRecord(table, id) {
        try {
            const response = await fetch(`${this.baseUrl}/${table}/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Failed to delete record');
            return true;
        } catch (error) {
            console.error('Error deleting record:', error);
            throw error;
        }
    }
};

// Make API globally available
window.API = API;