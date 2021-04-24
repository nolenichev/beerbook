import { Dialog } from '../../components/dialog/Dialog'
import { DialogsList } from '../../components/dialogsList/DialogsList'
import s from './Dialogs.module.scss'

export const Dialogs = (props) => {
    return (
        <section className={s.dialogs}>
            <DialogsList dialogs={props.state.dialogs} />
            <Dialog messages={props.state.messages} />
        </section>
    )
}
