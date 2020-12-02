import React, { useState, useEffect } from 'react'

const RecipeForm = () => {
    const [title, setTitle] = useState('Titre')

    const [nbEaters, setNbEaters] = useState(undefined)
    const [prepTime, setPrepTime] = useState(undefined)
    const [cookTime, setCookTime] = useState(undefined)

    const [number, setNumber]= useState(1)
    const [ingredient, setIngredient] = useState('Ingrédient')
    const [quantity, setQuantity] = useState('Quantité')
    const [unit, setUnit] = useState('Unité')
    const [listIngredient, setListIngredient]= useState([])
    
    
    useEffect(() => {
        console.log(listIngredient)
    }, [listIngredient, ingredient,quantity,unit])

    const createIngredient = () => {
        let wholeIngredient = {ingredient, quantity, unit}
        setListIngredient([...listIngredient, wholeIngredient])
        setIngredient('Ingrédient')
        setQuantity('Quantité')
        setUnit('Unité')    
    }
    

    return (
        <div>
            <input type='text' value={title} onChange={e => setTitle(e.target.value)}></input>

            <section className ='time'>
                <div>
                    <label>Nombre d'aventuriers</label>
                    <input type='number' value={nbEaters} onChange={e => setNbEaters(e.target.value)}></input>
                </div>
                <div>
                    <label>Temps de préparation (en minutes) </label>
                    <input type='number' value={prepTime} onChange={e => setPrepTime(e.target.value)}></input>
                </div>
                <div>
                    <label>Temps de cuisson (en minutes) </label>
                    <input type='number' value={cookTime} onChange={e => setCookTime(e.target.value)}></input>
                </div>
            </section>

            {/* { listIngredient.length > 0 ?
                (<div> 
                {listIngredient} 
                <input type='button' value='-'></input>
                </div>)
                : console.log('rien')
            } */}

            <section className='ingredient'>
                <input type='text' value={ingredient} onChange={e => setIngredient(e.target.value)}></input>
                <input type='text' value={quantity} onChange={e => setQuantity(Number(e.target.value))}></input>
                <input type='text' value={unit} onChange={e => setUnit(e.target.value)}></input>
                <input type='button' value='+' onClick ={() => createIngredient()}></input>
            </section>


        </div>
    )
}

export default RecipeForm