import Link from "next/link"

export default function HomePage() {
	return (
		<div>
			<h1>The home page</h1>
			<ul>
				<li>
					<Link href='/blog'>Blog</Link>
				</li>
				<li><Link href='/clients'>Clients</Link></li>
			</ul>
		</div>
	)
}
