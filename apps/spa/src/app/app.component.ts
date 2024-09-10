import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';

@Component({
	standalone: true,
	imports: [RouterModule, HlmButtonDirective, HlmCardDirective],
	selector: 'app-root',
	template: `
		<!-- <section class="w-80" hlmCard>
			<div hlmCardHeader>
				<h3 hlmCardTitle>Create new project</h3>
				<p hlmCardDescription>Deploy your new project in one-click.</p>
			</div>
			<p hlmCardContent>Content</p>
			<div class="justify-between" hlmCardFooter>
				<button hlmBtn variant="ghost">Cancel</button>
				<button hlmBtn>Create</button>
			</div>
		</section> -->
		<router-outlet></router-outlet>
	`,
})
export class AppComponent {
	title = 'spa';
}
