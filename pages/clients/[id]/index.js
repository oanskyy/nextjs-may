// react hook
import { useRouter } from "next/router"

export default function ClientProjectsPage() {
	// router object, exposes various data/methods : the pathname
	const router = useRouter()
	console.log(router.pathname)
	console.log(router.query)

	function loadProjectHandler() {
		// ...load data
		router.push({
			pathname: "/clients/[id]/[clientid]",
			query: { id: "oan", clientprojectid: "projectcta" }
		})
	}

	return (
		<div>
			<h1>The projects of a given client page</h1>
			<button onClick={loadProjectHandler}>Load Project A</button>
		</div>
	)
}
