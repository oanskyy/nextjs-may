// react hook
// import { useRouter } from "next/router"
import Link from "next/link"

export default function ClientsPage() {
	// router object, exposes various data/methods : the pathname
	// const router = useRouter()
	// console.log(router.pathname)

	// console.log(router.query)
	const clients = [
		{ id: "oan", name: "oan art" },
		{ id: "jas", name: "jas min" }
	]

	return (
		<div>
			<h1>The clients page</h1>
			<ul>
				{clients.map(client => (
					<li key={client.id}>
						<Link href={`/clients/${client.id}`}>{client.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
