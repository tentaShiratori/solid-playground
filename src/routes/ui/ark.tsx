import { Checkbox } from "@ark-ui/solid/checkbox";
import { QrCode } from "@ark-ui/solid/qr-code";
import CheckBox from "@suid/icons-material/CheckBox";

export default function Page() {
	return (
		<div>
			<Checkbox.Root>
				<Checkbox.Label>Checkbox</Checkbox.Label>
				<Checkbox.Control>
					<Checkbox.Indicator>
						<CheckBox />
					</Checkbox.Indicator>
				</Checkbox.Control>
				<Checkbox.HiddenInput />
			</Checkbox.Root>
			<QrCode.Root value="https://www.youtube.com/watch?v=OEhDBQXy-qc">
				<QrCode.Frame style={{ width: "300px" }}>
					<QrCode.Pattern />
				</QrCode.Frame>
			</QrCode.Root>
		</div>
	);
}
