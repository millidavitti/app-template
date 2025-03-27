"use client";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface Overlay {
	stateFlag: string;
	children: ReactNode;
	className?: string;
}

export default function Overlay({ stateFlag, children, className }: Overlay) {
	// const view =
	// 	stateFlag === null
	// 		? false
	// 		: stateFlag === settings_view ||
	// 		  stateFlag === vault_view ||

	return (
		<>
			{false && (
				<div
					className={cn(
						"inset-0 bg-light-surface-on-surface/15 backdrop-blur-md z-20 data-[is-shown=true]:fixed data-[is-shown=false]:hidden p-3 flex justify-center items-center",
						className,
					)}
					id={stateFlag!}
					data-is-shown={false}
					onClick={(e) => {
						// if (
						// 	VAULT_VIEWS.includes((e.target as HTMLElement).id as VaultView)
						// ) {
						// 	vault_view_setter(null);
						// }
						// else if (
						// 	SETTINGS_VIEWS.includes(
						// 		(e.target as HTMLElement).id as SettingsView,
						// 	)
						// )
						// 	settings_view_setter(null);
					}}
				>
					{children}
				</div>
			)}
		</>
	);
}
