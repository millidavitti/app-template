import { dialog_jotai, view_jotai } from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";

export default function useAlertDialogInterface() {
	const view_setter = useSetAtom(view_jotai);
	const [dialog, dialog_setter] = useAtom(dialog_jotai);

	function cancel() {
		view_setter(null);
		dialog_setter("cancel");
	}

	function proceed() {
		dialog_setter("continue");
	}

	return { cancel, proceed, dialog };
}
