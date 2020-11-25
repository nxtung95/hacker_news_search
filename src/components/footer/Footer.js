import React from 'react';
import '../.././assets/css/footer/Footer.css';

const footer = () => {
    return (
        <footer className="footer">
            <ul className="footer-list">
                <li>
                    <a href="/about">About</a>
                </li>
                <li>•</li>
                <li>
                    <a href="/setting">Setting</a>
                </li>
                <li>•</li>
                <li>
                    <a href="/help">Help</a>
                </li>
                <li>•</li>
                <li>
                    <a href="/documentation">API Documentation</a>
                </li>
                <li>•</li>
                <li>
                    <a href="/news">Hacker News</a>
                </li>
                <li>•</li>
                <li>
                    <a href="/fork">Fork/Contribute</a>
                </li>
                <li>•</li>
                <li>
                    <a href="/apps">Cool Apps</a>
                </li>
            </ul>
        </footer>
    );
}

export default footer;