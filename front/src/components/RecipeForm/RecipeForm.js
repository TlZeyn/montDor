import React, { useState, useEffect } from 'react'

const RecipeForm = () => {
    const [title, setTitle] = useState('Titre')

    const [nbEaters, setNbEaters] = useState(undefined)
    const [prepTime, setPrepTime] = useState(undefined)
    const [cookTime, setCookTime] = useState(undefined)

    const [number, setNumber] = useState(1)
    const [ingredient, setIngredient] = useState('Ingrédient')
    const [quantity, setQuantity] = useState('Quantité')
    const [unit, setUnit] = useState('Unité')
    const [listIngredient, setListIngredient] = useState([])
    


    useEffect(() => {

    }, [listIngredient, ingredient, quantity, unit])

    const createIngredient = () => {
        let wholeIngredient = { ingredient, quantity, unit }
        setListIngredient([...listIngredient, wholeIngredient])
        setIngredient('Ingrédient')
        setQuantity('Quantité')
        setUnit('Unité')
    }

    const deleteIngredient = (index) => {
        const newList = listIngredient.filter((item, i) => i !== index.i)
        setListIngredient(newList)

    }

    const modifyIngredient = (index) => {
        const modification = listIngredient.filter((item, i) => i == index.i)
        console.log(modification)
        setIngredient(modification[0].ingredient)
        setQuantity(modification[0].quantity)
        setUnit(modification[0].unit)
        deleteIngredient(index)
    }



    return (
        <div>
            <input type='text' value={title} onChange={e => setTitle(e.target.value)}></input>

            <section className='time'>
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


            { listIngredient.length > 0 ?
                <div>{listIngredient.map((item, i) =>
                    <div>
                        <input type='text' value={item.ingredient}></input>
                        <input type='text' value={item.quantity}></input>
                        <input type='text' value={item.unit} ></input>
                        <input type='button' value='modifier' onClick={() => modifyIngredient({ i })}></input>
                        <input type='button' value='-' onClick={() => deleteIngredient({ i })}></input>
                    </div>
                )}</div>
                : ''
            }


            <section className='ingredient'>
                <input type='text' value={ingredient} onChange={e => setIngredient(e.target.value)}></input>
                <input type='text' value={quantity} onChange={e => setQuantity(Number(e.target.value))}></input>
                <input type='text' value={unit} onChange={e => setUnit(e.target.value)}></input>
                <input type='button' value='+' onClick={() => createIngredient()}></input>
            </section>


        </div>
    )
}

export default RecipeForm