import react from 'react'

const RecipesList = ({RecipesList=[]}) => {
    return (
        <>
        {RecipesList.map((miam, index) => { 
            if (miam) {
                return (
                    <div key={miam.name}> 
                    <h1>{miam.name}</h1>
                    </div>
                
                )
            }
            return null 
        }) }
        </>
    
        );
    }







    )
}