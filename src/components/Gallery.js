import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import './Gallery.css'

const Gallery = () => {
    const data = useStaticQuery(
        graphql`
        query CloudinaryImage {
            allCloudinaryMedia {
            edges {
                node {
                    secure_url
                    resource_type
                }
            }
            }
        }`
    );
    const images = data.allCloudinaryMedia.edges;
    return (
        <React.Fragment>
            <div className="container">
                {images.map((image, index) => (
                        <img 
                            key={`${index}-image`}
                            src={image.node.secure_url} 
                            alt="" >
                        </img>
                    ))
                }
            </div>
        </React.Fragment>
    )
};

export default Gallery;