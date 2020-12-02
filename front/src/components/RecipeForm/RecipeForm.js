import React, { useState, useEffect } from 'react'

const RecipeForm = () => {
    const [title, setTitle] = useState('Titre')

    const [nbEaters, setNbEaters] = useState(null)
    const [prepTime, setPrepTime] = useState(null)
    const [cookTime, setCookTime] = useState(null)

    const [ingredient, setIngredient] = useState('Ingrédient')
    const [quantity, setQuantity] = useState('Quantité')
    const [unit, setUnit] = useState('Unité')

    return (
        <div>
            <input type='text' value={title}></input>

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

            <section className='ingredient'>
                <input type='text' value={ingredient} onChange={e => setIngredient(e.target.value)}></input>
                <input type='text' value={quantity} onChange={e => setQuantity(e.target.value)}></input>
                <input type='text' value={unit} onChange={e => setUnit(e.target.value)}></input>
                <input type='button' value='+'></input>

            </section>


        </div>
    )
}

export default RecipeForm