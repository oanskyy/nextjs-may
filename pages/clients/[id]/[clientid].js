// react hook
import { useRouter } from "next/router"

export default function SelectedClientsProjectPage() {
	// router object, exposes various data/methods : the pathname
	const router = useRouter()
	console.log(router.pathname)
	console.log(router.query)

	return (
		<div>
			<h1>The project for a specific client page</h1>
		</div>
	)
}
