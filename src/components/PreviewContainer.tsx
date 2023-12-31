import React from 'react';

interface PreviewContainerProps {
    description?: string;
    imgSrc?: string;
}

const PreviewContainer: React.FC<PreviewContainerProps> = ({ description, imgSrc }) => {
    return (
        <div className="preview-container">
            <img src={imgSrc} className="img-preview"/>
            <p>{description}</p>
            <button className="btn-standard">apply</button>
        </div>
    )
}

export default PreviewContainer;