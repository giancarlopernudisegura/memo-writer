import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import Form from "@/components/Form";

export default function Home() {
	return <Card>
		<CardHeader>
			<h1 className="text-xl">Memo</h1>
		</CardHeader>
		<CardBody>
			<Form />
		</CardBody>
		<CardFooter><Button>Generate</Button></CardFooter>
	</Card>;
}
