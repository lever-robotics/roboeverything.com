import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
// import { supabase } from './supabaseClient';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nkizhguefiunixhjkcxa.supabase.co';  // Replace with your Supabase project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5raXpoZ3VlZml1bml4aGprY3hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzMjEyMzcsImV4cCI6MjA0Mzg5NzIzN30.Y3k99aSu5csAal2R-CdB8atNaDnnkc-MEGeU7qjSYs8';  // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseKey);

function LoginHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"></h1>
        <p className="hero__subtitle">
            {/*More Text?*/}
        </p>
      </div>
    </header>
  );
}

function LoginForm() {
    // State to store input values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from reloading the page

        // Simple validation
        if (!email || !password) {
            setError('Both email and password are required.');
            return;
        }

        setLoading(true); // Start loading state

        // Sign in with Supabase
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message); // Set the error from Supabase
        } else {
            console.log('Logged in successfully', data);
            // Handle successful login (e.g., redirect, update app state)
        }

        setLoading(false); // Stop loading state
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                {error && <p className="error">{error}</p>} {/* Show error if validation fails */}

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default function LoginPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Login - ${siteConfig.title}`}
      description="Login">
      <LoginHeader />
      <main className="container">
        <p>
        </p>
        <LoginForm/>
      </main>
    </Layout>
  );
}
