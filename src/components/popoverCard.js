import React,{useState} from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
const PopoverCard = ({body}) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);
    return (
        <div>
            <Button id="Popover1" type="button">
                Add
            </Button>
            <Popover placement="bottom" isOpen={popoverOpen} trigger="focus" target="Popover1" toggle={toggle}>
                <PopoverHeader>No puede Agregar más Héroes</PopoverHeader>
                <PopoverBody>{body}</PopoverBody>
            </Popover>
        </div>
    )
}

export default PopoverCard
