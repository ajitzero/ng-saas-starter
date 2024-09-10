import { Component } from '@angular/core';

@Component({
	selector: 'app-logo',
	standalone: true,
	template: `
		<div class="relative z-20 flex items-center text-lg font-medium">
			<svg
				class="mr-2 h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
			</svg>
			Acme Inc
		</div>
	`,
})
export class LogoComponent {}
