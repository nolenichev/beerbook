import style from './Users.module.scss'
import { BsSearch } from 'react-icons/bs'
import UserItemContainer from '../../components/userItem/UserItemContainer'

const Users = () => {
	return (
		<section className={style.usersPage}>
			<header>
				<input type="text" placeholder="Search users" />
				<button>
					<BsSearch></BsSearch>
				</button>
                <h2>Users</h2>
			</header>
			<UserItemContainer />
		</section>
	)
}

export default Users
