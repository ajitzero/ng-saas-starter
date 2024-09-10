import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideLoader } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';

@Component({
	selector: 'app-auth-example-form',
	standalone: true,
	imports: [HlmButtonDirective, HlmIconComponent, HlmSpinnerComponent, FormsModule],
	host: {
		class: 'block',
	},
	providers: [provideIcons({ lucideGithub, lucideLoader })],
	template: `
		<div class="mx-auto w-full justify-center space-y-6 sm:w-[350px]">
			<div class="space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">Create an account</h1>
				<p class="text-muted-foreground text-sm">Enter your email below to create your account</p>
			</div>
			<div class="grid gap-6">
				<form (ngSubmit)="send()">
					<label class="sr-only" hlmLabel for="email">Email</label>
					<input
						class="w-full"
						id="email"
						hlmInput
						placeholder="Email"
						type="email"
						placeholder="name@example.com"
						autocomplete="off"
					/>
					<button class="mt-2 w-full" [disabled]="isLoading()" hlmBtn type="submit">
						@if (isLoading()) {
							<hlm-icon class="mr-2 animate-spin" name="lucideLoader" size="sm" />
						}
						Sign In with Email
					</button>
				</form>
				<div class="relative">
					<div class="absolute inset-0 flex items-center"><span class="w-full border-t"></span></div>
					<div class="relative flex justify-center text-xs uppercase">
						<span class="bg-background text-muted-foreground px-2">Or continue with</span>
					</div>
				</div>
				<button [disabled]="isLoading()" hlmBtn variant="outline">
					@if (isLoading()) {
						<hlm-icon class="mr-2 animate-spin" name="lucideLoader" size="sm" />
					} @else {
						<hlm-icon class="mr-2" size="sm" name="lucideGithub" />
					}
					GitHub
				</button>
			</div>
			<p class="text-muted-foreground text-center text-sm sm:px-8">
				By clicking continue, you agree to our
				<a class="hover:text-primary cursor-pointer underline underline-offset-4">Terms of Service</a>
				and
				<a class="hover:text-primary cursor-pointer underline underline-offset-4">Privacy Policy</a>
				.
			</p>
		</div>
	`,
})
export class AuthenticationFormComponent {
	isLoading = signal(false);

	send() {
		this.isLoading.set(true);
		setTimeout(() => this.isLoading.set(false), 3000);
	}
}
