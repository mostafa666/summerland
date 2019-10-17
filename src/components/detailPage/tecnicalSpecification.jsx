import React from 'react';

const TecnicalSpecification = ({details}) => (
    <div className="specification">
        {
            Array.isArray(details) ? details.map(data=> (
                <Properties title={data.header} key={data.id} description={data.content} />
            )):null
            
        }
    </div>
)

const Properties = ({title,description}) => (
    <div className="specification__properties">
        <span className="specification__properties--title">{title}</span>
        <span className="specification__properties--description">{description}</span>
    </div>
);

export default TecnicalSpecification;
