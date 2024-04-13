import { Form } from "./components/Form";
import { ReduxStudy } from "./components/ReduxStudy";

export default function Home() {
	return (
		<main className="flex h-screen w-full bg-neutral-900 justify-center items-center">
			<ReduxStudy />
		</main>
	);
}
