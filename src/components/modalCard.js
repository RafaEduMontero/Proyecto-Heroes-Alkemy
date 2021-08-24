import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';
import ButtonCard from '../atomics/buttonCard';
import useHeroeById from '../hooks/useHeroeById';

const ModalCard = ({buttonLabel,className,img,heroe,color}) => {
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    // const {powerstats:{combat,intelligence,power,speed,strength},id,biography:{alignment},name,image:{url}} = heroe
    return (
        <div>
        {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
        <ButtonCard img={img} color={color}  onClick={toggle}/>
        {heroe? <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>{heroe.name}</ModalHeader>
          <ModalBody>
              <div className="row">
                  <div className="col-6">
                      <img className="w-100" src={heroe.image.url}/>
                  </div>
                  <div className="col-6">
                      <h5>{`Color de Ojos: ${heroe.appearance.hair-color}`}</h5>
                  </div>
              </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>: null}
      </div>
    )
}

export default ModalCard;
