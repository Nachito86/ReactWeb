import React from 'react'
import Card from '../CARD/card' 
import EjercicioForm from '../components/EjercicioForm'

const Exercisenew=({form,onChange,onSubmit})=>(
            <div className="row">
                    <div className="col-sm">
                        <Card
                            {...form}
                        />
                    </div>
                    <div className="col-sm ExerciseNew_Form_Space">
                                <EjercicioForm 
                                    onChange={onChange} 
                                    onSubmit={onSubmit}  
                                    form={form} 
                                />
                    </div>
             </div>
);


export default Exercisenew