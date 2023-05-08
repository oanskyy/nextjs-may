// react hook
import { useRouter } from "next/router"

export default function PortofolioProjectPage() {
	// router object, exposes various data/methods : the pathname
	const router = useRouter()
	console.log(router.pathname)
	console.log(router.query)

	return (
		<div>
			<h1>The portofolio project page</h1>
		</div>
	)
}
