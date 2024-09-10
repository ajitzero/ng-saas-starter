import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { AuthenticationFormComponent } from './login.component';
import { LogoComponent } from './logo.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		AuthenticationFormComponent, //
		HlmButtonDirective,
		HlmCardDirective,
		LogoComponent,
	],
	host: {
		class: 'block',
	},
	template: `
		<div class="bg-background overflow-hidden shadow-md md:shadow-xl" hmlcard>
			<div
				class="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
			>
				<a class="absolute left-4 top-4 md:left-8 md:top-8" hlmBtn variant="ghost">
					<app-logo />
				</a>
				<div class="bg-muted relative hidden h-full flex-col border-r p-10 text-white lg:flex dark:border-r-slate-800">
					<div class="absolute inset-0 bg-slate-900"></div>
					<div class="relative z-20 mt-auto">
						<blockquote class="space-y-2">
							<p class="text-lg">
								“This library has saved me countless hours of work and helped me deliver stunning designs to my clients
								faster than ever before.”
							</p>
							<footer class="text-sm">Sofia Davis</footer>
						</blockquote>
					</div>
				</div>
				<div class="lg:p-8">
					<app-auth-example-form />
				</div>
			</div>
		</div>
	`,
})
export default class HomePageComponent {}
