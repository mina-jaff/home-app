import React from 'react';

interface ProgressTrackerProps {
    pageCount: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ pageCount }) => {
    const progressPercentage = (pageCount - 1) * 50;

    return (
    <div className="flex-container">
        <div className="progress-tracker">
            <div className="progress-bar" style={{ width: `${progressPercentage}%`, backgroundColor: '#EC8F5E' }}></div>
        </div>
        <p>{`${progressPercentage}%`}</p>
    </div>
  );
};

export default ProgressTracker;