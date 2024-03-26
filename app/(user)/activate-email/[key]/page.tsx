import { ConfirmIcon } from "@/components/icons/FrontAwesome";
type Props = {
	params: {
		key: string;
	};
	searchParams: any;
};
import style from "./style.module.css";
import Button from "./component/button";
export default function ConfirmEmail(props: Props) {
	return (
		<main className={style.container}>
			<section className="flex flex-col items-center">
				<ConfirmIcon color="#080" classname="h-44 w-44 mb-8" />
				<h1 className="text-6xl my-4">Email has been Confirmed!</h1>
				<p className="text-3xl">
					សូមអរគុណសម្រាប់ការបញ្ជាក់អ៊ីមែលរបស់អ្នក
				</p>
				<Button title="Login" classname="my-8" />
			</section>
		</main>
	);
}
