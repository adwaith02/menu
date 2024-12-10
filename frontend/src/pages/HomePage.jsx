import React from 'react';

const HomePage = () => {
    return (
        <div 
            className="home-container" 
            style={{ 
                display: 'flex', // Use flexbox for centering
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
                paddingTop: '100px', 
                textAlign: 'center', 
                backgroundImage: 'url("/f81b6208cb3da0f5ecc0f0d109ca4bd0.jpg")',
                backgroundSize: 'cover', // Ensure the background image covers the entire page
                backgroundPosition: 'center', // Center the image
                height: '100vh',  // Full viewport height
                color: 'white',
                position: 'relative', // To create the opacity layer on top
            }}
        >
            {/* Semi-transparent overlay for opacity effect */}
            <div 
                style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    bottom: 0, 
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust the opacity of the background image
                }}
            ></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <h1>Welcome to Menu Management System</h1>
                <p>Your go-to solution for managing menus, reservations, and more!</p>
                <p>
                    We offer an intuitive interface for restaurant menu management, reservations, and much more.
                </p>
            </div>
        </div>
    );
};

export default HomePage;
