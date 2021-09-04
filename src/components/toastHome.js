//Reactrap
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToastHome = ({body,header}) => {
    return (
        <Toast>
            <ToastHeader icon="danger">
                {header}
            </ToastHeader>
            <ToastBody>
                {body}
            </ToastBody>
        </Toast>
    )
}

export default ToastHome
