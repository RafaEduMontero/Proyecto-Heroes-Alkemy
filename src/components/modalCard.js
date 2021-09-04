import { useState, StrictMode,Fragment, useEffect, useRef } from 'react';
//Reactrap
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem } from 'reactstrap';
//Atomics
import ButtonCard from '../atomics/buttonCard';

const ModalCard = ({ className, img, heroe, color }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => {setModal(!modal)};

  return (
    <Fragment>
      <ButtonCard img={img} color={color} onClick={toggle} />
      {heroe ? <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{heroe.name}</ModalHeader>
        <ModalBody>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-6 ">
              <img className="w-100" src={heroe.image.url} />
            </div>
            <div className="col-6">
              <ListGroup>
                <ListGroupItem><div className="row d-flex justify-content-center"><p className="font-weight-bold">Peso:</p><p>{`${heroe.appearance.weight[1]}`}</p></div></ListGroupItem>
                <ListGroupItem><div className="row d-flex justify-content-center"><p className="font-weight-bold">Altura:</p><p>{`${heroe.appearance.height[1]}`}</p></div></ListGroupItem>
                <ListGroupItem><div className="row d-flex justify-content-center"><p className="font-weight-bold">Color de Ojos:</p><p>{`${heroe.appearance['eye-color']}`}</p></div></ListGroupItem>
                <ListGroupItem><div className="row d-flex justify-content-center"><p className="font-weight-bold">Color de cabellor:</p><p>{`${heroe.appearance['hair-color']}`}</p></div></ListGroupItem>
                <ListGroupItem><div className="row d-flex justify-content-center"><p className="font-weight-bold">Lugar de Trabajo:</p><p>{`${heroe.work.base}`}</p></div></ListGroupItem>
              </ListGroup>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal> : null}
      </Fragment>
  )
}

export default ModalCard;
