import React, { useState, useEffect } from 'react'

const RecipeForm = () => {
    const [title, setTitle] = useState('Titre')

    const [nbEaters, setNbEaters] = useState(undefined)
    const [prepTime, setPrepTime] = useState(undefined)
    const [cookTime, setCookTime] = useState(undefined)

    const [ingredient, setIngredient] = useState('Ingrédient')
    const [quantity, setQuantity] = useState('Quantité')
    const [unit, setUnit] = useState('Unité')
    const [listIngredient, setListIngredient] = useState([])

    const [step, setSteps] = useState('Ajouter une étape')
    const [listSteps, setListSteps] = useState([])
    const [nbStep, setNbStep] = useState(0)
    

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
        setIngredient(modification[0].ingredient)
        setQuantity(modification[0].quantity)
        setUnit(modification[0].unit)
        deleteIngredient(index)
    }

    const createStep = () => {
        if (nbStep > 0 ) {
            let number = nbStep
            let newStep = {number,step}
            setListSteps([...listSteps, newStep])
            setNbStep(0)
            setSteps('Ajouter une étape') 
        } else {
            let number = listSteps.length + 1
            let newStep = {number,step}
            setListSteps([...listSteps,newStep])
            setSteps('Ajouter une étape') 
        }
               
    }

    const deleteStep = (index) => {
    const newList = listSteps.filter((item, i) => i !== index.i)
    setListSteps(newList)
    }

    const modifyStep = (index) => {
        const modification = listSteps.filter((item, i) => i == index.i)
        console.log(modification[0].number)
        setNbStep(modification[0].number)
        setSteps(modification[0].step)
        deleteStep(index)
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
                        <li>{item.ingredient}</li>
                        <li>{item.quantity}</li>
                        <li>{item.unit}</li>
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


            { listSteps.length > 0 ?
                <div>{listSteps.map((item, i) =>
                    <div>
                        <li>{item.number}</li>
                        <li>{item.step}</li>
                        <input type='button' value='modifier' onClick={() => modifyStep({ i })}></input>
                        <input type='button' value='-'></input>
                    </div>
                )}</div>
                : ''
            }

            <section className='step'>
                <input type='text' value={step} onChange={e => setSteps(e.target.value)}></input>
                <input type='button' value='+' onClick={() => createStep()}></input>
            </section>


        </div>
    )
}

export default RecipeForm