import style from './Users.module.scss'
import { BsSearch } from 'react-icons/bs'
import UserItemContainer from '../../components/userItem/UserItemContainer'

const Users = () => {
	return (
		<section className={style.usersPage}>
			<header>
                <h2>Users</h2>
				<input type="text" placeholder="Search users" />
				<button>
					<BsSearch></BsSearch>
				</button>
			</header>
			<UserItemContainer />
		</section>
	)
}

export default Users
