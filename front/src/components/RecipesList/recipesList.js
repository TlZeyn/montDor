import React from 'react';

const recipesList = ({ recipesList = []}) => {
    return (
        <>
            { recipesList.map((data, index) => {
                if (data) {
                    return (
                        <div key={data.name}>
                            <h1>{data.name}</h1>
                        </div>
                    )
                }
                return null
            })}
        </>
    );
}

export default recipesList;