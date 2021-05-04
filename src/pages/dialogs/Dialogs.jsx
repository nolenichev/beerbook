import DialogContainer from '../../components/dialog/DialogContainer'
import { DialogsList } from '../../components/dialogsList/DialogsList'
import s from './Dialogs.module.scss'

export const Dialogs = (props) => {
	return (
		<section className={s.dialogs}>
			<DialogsList store={props.store} />
			<DialogContainer
				state={props.state}
				dispatch={props.dispatch}
				store={props.store}
			/>
		</section>
	)
}
