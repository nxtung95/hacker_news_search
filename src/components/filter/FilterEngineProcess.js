import React from 'react';
import '../.././assets/css/filter/FilterEngineProcess.css';

const filterProcess = () => {
    return (
        <React.Fragment>
            <div className="result-time">
                22.790.271 results (0.006 seconds)
            </div>
            <div className="social-share">
                <select>
                    <option>Share on Twitter</option>
                    <option>Share on Facebook</option>
                    <option>Share via Email</option>
                </select>
            </div>
        </React.Fragment>
    );
}

export default filterProcess;