
import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

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
        <div className="container">
            {images.map((image, index) => (
                <figure className="wave" key={`${index}-image`}>
                    <img 
                        src={image.node.secure_url} 
                        alt="" >
                    </img>
                    <figcaption></figcaption>
                </figure>
                ))
            }
        </div>
    )
};

export default Gallery;