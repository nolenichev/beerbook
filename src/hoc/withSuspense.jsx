import React from 'react'
import Loader from '../components/common/loader/Loader'

const withSuspense = (Component) => (props) =>
	(
		<React.Suspense fallback={<Loader />}>
			<Component {...props} />
		</React.Suspense>
	)

export default withSuspense
