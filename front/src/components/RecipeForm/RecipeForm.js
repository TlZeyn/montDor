import React, { useState, useEffect } from 'react'
import UploadFront from '../UploadFront/UploadFront'

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
        if (ingredient === '' && quantity === '') {
            alert("L'ingrédient et la quantité n'ont pas été renseignés")
        } else if (ingredient === '') {
            alert("L'ingrédient n'a pas été renseigné")
        } else if (quantity === '') {
            alert("La quantité n'a pas été renseigné")
        } else {
            let wholeIngredient = { ingredient, quantity, unit }
            setListIngredient([...listIngredient, wholeIngredient])
            setIngredient('')
            setQuantity('')
            setUnit('')
        }
    }

    const deleteIngredient = (index) => {
        const newList = listIngredient.filter((item, i) => i !== index.i)
        setListIngredient(newList)

    }

    const modifyIngredient = (index) => {
        if (ingredient == '' || quantity == '') {
            const modification = listIngredient.filter((item, i) => i == index.i)
            setIngredient(modification[0].ingredient)
            setQuantity(modification[0].quantity)
            setUnit(modification[0].unit)
            deleteIngredient(index)
        }

    }

    const createStep = () => {
        if (step === '') {
            alert("Aucune étape n'a été ajoutée")
        } else if (nbStep > 0) {
            let number = nbStep
            let newStep = { number, step }
            setListSteps([...listSteps, newStep])
            setNbStep(0)
            setSteps('')
        } else {
            let number = listSteps.length + 1
            let newStep = { number, step }
            setListSteps([...listSteps, newStep])
            setSteps('')
        }
    }

    const deleteStep = (index) => {
        const newList = listSteps.filter((item, i) => i !== index.i)
        const lastOfNewList = newList.length - 1
        const lastOfListStep = listSteps.length - 1
        if (listSteps.length > 1 && newList[lastOfNewList].step == listSteps[lastOfListStep].step) {
            newList.map((e) => {
                if (e.number > 1) {
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


    let sortedArray = listSteps.sort((a, b) => (a.number > b.number) ? 1 : -1)

    

    const restoreSettingsIngredient = () => {
        document.getElementById('recipeForm_addIngredient').style.borderStyle = 'none';
    }

    const restoreSettingsStep = () => {
        document.getElementById('recipeForm_step').style.borderStyle = 'none';
    }

    const recipeData = (e) => {
        let data = []
        //verify that all informations are filled OK
        //create object data
        //send object to back with axios
        e.preventDefault();
        if (listIngredient.length < 1) {
            document.getElementById('recipeForm_addIngredient').style.borderStyle = 'solid';
            document.getElementById('recipeForm_addIngredient').style.borderWidth = '1px';
            document.getElementById('recipeForm_addIngredient').style.borderColor = 'red';
        } if(listSteps.length < 1 ) {
            document.getElementById('recipeForm_step').style.borderStyle = 'solid';
            document.getElementById('recipeForm_step').style.borderWidth = '1px';
            document.getElementById('recipeForm_step').style.borderColor = 'red';
        }
        
        else {
            console.log(data)
        }
    }

    return (
        <div id='recipeForm'>
            <form onSubmit={recipeData}>
                <UploadFront />

                <div className='recipeForm_title-group'>
                    <input id='recipeForm_title' type='text' placeholder="Title" onClick={() => setTitle('')} onChange={e => setTitle(e.target.value)} required></input>
                </div>




                <section id='recipeForm_timeSlot'>
                    <div className='recipeForm_timeSlot_group-input'>
                        <label>Nombre d'aventuriers</label>
                        <input className='recipeForm_timeSlot-input' min='1' type='number' value={nbEaters} onChange={e => setNbEaters(e.target.value)} required></input>
                    </div>
                    <div className='recipeForm_timeSlot_group-input'>
                        <label>Temps de préparation </label>
                        <input className='recipeForm_timeSlot-input' min='1' placeholder="min" type='number' value={prepTime} onChange={e => setPrepTime(e.target.value)} required></input>
                    </div>
                    <div className='recipeForm_timeSlot_group-input'>
                        <label>Temps de cuisson </label>
                        <input className='recipeForm_timeSlot-input' min='1' placeholder="min" type='number' value={cookTime} onChange={e => setCookTime(e.target.value)} required ></input>
                    </div>
                </section>


                {listIngredient.length > 0 ?
                    <div>
                        {listIngredient.map((item, i) =>
                            <section>
                                <input className='recipeForm_addIngredient-input-igr' type='text' type='text' value={item.ingredient} onClick={() => modifyIngredient({ i })}></input>
                                <input className='recipeForm_addIngredient-input-qty' type='number' value={item.quantity} step='any' onClick={() => modifyIngredient({ i })}></input>
                                <input className='recipeForm_addIngredient-input-unt' type='text' value={item.unit} onClick={() => modifyIngredient({ i })} ></input>
                                <input className='recipeForm-button' type='button' value='-' onClick={() => deleteIngredient({ i })}></input>
                            </section>
                        )}</div>
                    : ''
                }

                <section id='recipeForm_addIngredient'>
                    <input className='recipeForm_addIngredient-input-igr' type='text' placeholder='Ingrédient' value={ingredient} onChange={e => setIngredient(e.target.value)} onClick={() => restoreSettingsIngredient()} ></input>
                    <input className='recipeForm_addIngredient-input-qty' type='number' placeholder='Quantité' value={quantity} step='any' onChange={e => setQuantity(e.target.value)} onClick={() => restoreSettingsIngredient()}></input>
                    <input className='recipeForm_addIngredient-input-unt' type='text' placeholder='Unité' value={unit} onChange={e => setUnit(e.target.value)}></input>
                    <input type='button' value='+' onClick={() => createIngredient()}></input>
                </section>



                {listSteps.length > 0 ?
                    <div>
                        {listSteps.map((item, i) =>
                            <section>
                                <input className='recipeForm_step-input' type='text' value={item.number + '.' + item.step} onClick={() => modifyStep({ i })}></input>
                                <input className='recipeForm-button' type='button' value='-' onClick={() => deleteStep({ i })}></input>
                            </section>
                        )}</div>
                    : ''
                }

                <section id='recipeForm_step'>
                    <input className='recipeForm_step-input' type='text' placeholder='Ajouter une étape' value={step} onChange={e => setSteps(e.target.value)} onClick = {() => restoreSettingsStep()}></input>
                    <input type='button' value='+' onClick={() => createStep()}></input>
                </section>

                <section id='recipeForm_message'>
                    <textarea maxlength='100' placeholder='Ajouter un message' onChange={e => setMessage(e.target.value)}></textarea>
                </section>

                <div id='recipeForm-button'>
                    <input id='recipeForm-button--input' type='submit' value='Publier'></input>
                </div>

            </form>

        </div>
    )
}

export default RecipeForm