// src/api/types/api-store.ts

export interface Tokens {
    accessToken: string | null;
    refreshToken: string | null;
}

export interface ApiState extends Tokens {
    isLoading: boolean;
    error: string | null;
}

export interface ApiStore extends ApiState {
    // Token management
    setTokens: (tokens: Tokens) => void;
    clearTokens: () => void;
    getTokens: () => Tokens;
    
    // Status management
    setLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;
    clearError: () => void;
}