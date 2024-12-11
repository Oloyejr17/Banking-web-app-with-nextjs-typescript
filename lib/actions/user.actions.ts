'use client';

import { useState, useEffect } from 'react';

// User type interface
interface User {
  email: string;
  firstName: string;
  lastName: string;
}

// Get logged-in user from localStorage
export const getLoggedInUser = (): User | null => {
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
};

// Sign-in function
export const signIn = ({ email }: { email: string }) => {
  const user = { email, firstName: 'Oloye', lastName: 'Jr' };
  localStorage.setItem('user', JSON.stringify(user));
  return user;
};

// Sign-up function
export const signUp = ({ email, firstName, lastName }: User) => {
  const newUser = { email, firstName, lastName };
  localStorage.setItem('user', JSON.stringify(newUser));
  return newUser;
};

// Logout function
export const logout = () => {
  localStorage.removeItem('user');
};
