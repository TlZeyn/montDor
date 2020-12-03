import React, { useState, useEffect } from 'react'

import './RecipeForm.css'

const RecipeForm = () => {
    const [title, setTitle] = useState('Titre')

    const [nbEaters, setNbEaters] = useState(undefined)
    const [prepTime, setPrepTime] = useState(undefined)
    const [cookTime, setCookTime] = useState(undefined)

    const [ingredient, setIngredient] = useState('')
    const [quantity, setQuantity] = useState('')
    const [unit, setUnit] = useState('')
    const [listIngredient, setListIngredient] = useState([])

    const [step, setSteps] = useState('')
    const [listSteps, setListSteps] = useState([])
    const [nbStep, setNbStep] = useState(0)

    const [message, setMessage] = useState('')
    

    useEffect(() => {

    }, [listIngredient, ingredient, quantity, unit, listSteps])

    const createIngredient = () => {
        if( ingredient === '' && quantity === '' ) {
            alert("L'ingrédient et la quantité n'ont pas été renseignés")           
        } else if (ingredient === '') {
            alert("L'ingrédient n'a pas été renseigné")
        } else if (quantity === '') {
            alert("La quantité n'a pas été renseigné")
        } else {
            let wholeIngredient = { ingredient, quantity, unit }
            setListIngredient([...listIngredient, wholeIngredient])            
        }            
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
        if (step === '') {
            alert("Aucune étape n'a été ajoutée")
        } else if (nbStep > 0) {
            let number = nbStep
            let newStep = {number,step}
            setListSteps([...listSteps, newStep])
            setNbStep(0)
            setSteps('') 
        } else {
            let number = listSteps.length + 1
            let newStep = {number,step}
            setListSteps([...listSteps,newStep])
            setSteps('') 
        }               
    }

    const deleteStep = (index) => {
        const newList = listSteps.filter((item, i) => i !== index.i)
        const lastOfNewList = newList.length - 1
        const lastOfListStep = listSteps.length - 1
        if ( listSteps.length > 1 && newList[lastOfNewList].step == listSteps[lastOfListStep].step) {
            newList.map((e) => {
                if (e.number > 1 ) {
                    e.number -= 1
                }
            })
        }         
        setListSteps(newList)
    }

    const modifyStep = (index) => {
        const modification = listSteps.filter((item, i) => i == index.i)
        setNbStep(modification[0].number)
        setSteps(modification[0].step)
        deleteStep(index)
    }


    let sortedArray = listSteps.sort((a,b) => (a.number > b.number) ? 1 : -1)


    return (
        <div id='recipeForm'>
            <input id='recipeForm_title' type='text' placeholder="Title" onClick={() => setTitle('')} onChange={e => setTitle(e.target.value)}></input>

            <section id='recipeForm_timeSlot'>
                <div className='recipeForm_timeSlot_group-input'>
                    <label>Nombre d'aventuriers</label>
                    <input className='recipeForm_timeSlot-input' type='number' value={nbEaters} onChange={e => setNbEaters(e.target.value)}></input>
                </div>
                <div className='recipeForm_timeSlot_group-input'>
                    <label>Temps de préparation </label>
                    <input className='recipeForm_timeSlot-input' placeholder="min" type='number' value={prepTime} onChange={e => setPrepTime(e.target.value)}></input>
                </div>
                <div className='recipeForm_timeSlot_group-input'>
                    <label>Temps de cuisson </label>
                    <input className='recipeForm_timeSlot-input' placeholder="min" type='number' value={cookTime} onChange={e => setCookTime(e.target.value)}></input>
                </div>
            </section>


            { listIngredient.length > 0 ?
                <section id='recipeForm_listIngredient'>
                    {listIngredient.map((item, i) =>
                        <div>
                            <li>{item.ingredient}</li>
                            <li>{item.quantity}</li>
                            <li>{item.unit}</li>
                            <input type='button' value='modifier' onClick={() => modifyIngredient({ i })}></input>
                            <input type='button' value='-' onClick={() => deleteIngredient({ i })}></input>
                        </div>
                )}</section>
                : ''
            }

            <section id='recipeForm_addIngredient'>
                <input className='recipeForm_addIngredient-input-igr' type='text' placeholder='Ingrédient' value={ingredient} onChange={e => setIngredient(e.target.value)}></input>
                <input className='recipeForm_addIngredient-input-qty' type='number' placeholder='Quantité' value={quantity} step ='any' onChange={e => setQuantity(e.target.value)}></input>
                <input className='recipeForm_addIngredient-input-unt' type='text' placeholder='Unité' value={unit} onChange={e => setUnit(e.target.value)}></input>
                <input className='recipeForm-button' type='button' value='+' onClick={() => createIngredient()}></input>
            </section>


            { listSteps.length > 0 ?
                <section id='recipeForm_listStep'>
                    {listSteps.map((item, i) =>
                        <div>
                            <li>{item.number}</li>
                            <li>{item.step}</li>
                            <input type='button' value='modifier' onClick={() => modifyStep({ i })}></input>
                            <input type='button' value='-'  onClick={() => deleteStep({ i })}></input>
                    </div>
                )}</section>
                : ''
            }

            <section id='recipeForm_addStep'>
                <input type='text' placeholder='Ajouter une étape' value={step} onChange={e => setSteps(e.target.value)}></input>
                <input type='button' value='+' onClick={() => createStep()}></input>
            </section>

            <section id='recipeForm_message'>
                <input type='text' placeholder='Ajouter un message' onChange={e => setMessage(e.target.value)}></input>
            </section>

            <input type='button' value='Publier'></input>


        </div>
    )
}

export default RecipeForm