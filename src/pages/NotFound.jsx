import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container mx-auto py-12 text-center space-y-4">
      <h2 className="text-4xl font-bold">404 - Page Not Found</h2>
      <Link to="/" className="text-blue-600 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
