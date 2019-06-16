import React from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
import './menu.css'

const Menu = ({ isOpen, places, toggleMenu, filterPlaces, makeTogglePlaceInfoView }) => (
    <div>
        { !isOpen && <span className='menu-icon' onClick={toggleMenu}>&#9776;</span> }
        <div id="menu" className={ isOpen ? 'menu open' : 'menu' } >
            { isOpen &&
                <div>
                    <h1>Explore Balneário</h1>
                    <span className='menu-icon menu-icon-open' onClick={toggleMenu}>&#9776;</span>
                    <Form className="menu-form">
                        <FormGroup>
                            <Input
                                type="search"
                                name="search"
                                id="exampleSearch"
                                placeholder="Filtrar Lugares"
                                className="search-box"
                                onChange={filterPlaces}
                            />
                        </FormGroup>
                        <FormGroup>
                            { places.map((place, index) => (
                                place.show &&
                                <Input
                                    key={`id-place-${place.name}`}
                                    className="place-name"
                                    plaintext
                                    value={place.name}
                                    onClick={() => makeTogglePlaceInfoView(index)}
                                    readOnly/>
                            ))}
                        </FormGroup>
                    </Form>
                </div>
            }
        </div>
    </div>
)

export default Menu
