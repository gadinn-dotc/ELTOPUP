'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from '../utils/axios';
import { useRouter } from 'next/navigation';

// Define User type
interface User {
    id: number;
    name: string;
    email: string;
}

// Define AuthContext type
interface AuthContextType {
    user: User | null;
    login: (form: { email: string; password: string }) => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
}

// Create Context with default undefined
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define Props for AuthProvider
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            try {
                const token = localStorage.getItem('auth_token');
                if (!token) {
                    setLoading(false);
                    return;
                }

                const response = await axios.get('/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(response.data);
            } catch (error) {
                console.error('Failed to fetch user:', error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, []);

    const login = async (form: { email: string; password: string }) => {
        try {
            const response = await axios.post('/login', form, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            localStorage.setItem('auth_token', response.data.access_token); // ✅ Correct key
            setUser(response.data.user);
            router.push('/daftargame');
        } catch (error: any) {
            console.log('Login error:', error.response?.data);
            alert(error.response?.data?.message || 'Login failed');
        }
    };

    const logout = async () => {
        try {
            const token = localStorage.getItem('auth_token');
            if (!token) return;

            await axios.post('/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            localStorage.removeItem('auth_token');
            setUser(null);
            router.push('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook for using Auth Context
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
