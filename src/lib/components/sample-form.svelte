<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { route } from '$lib/ROUTES';

	export let formData;

	const { form, message, errors, constraints, delayed, enhance } = superForm(formData, {
		resetForm: true
	});
</script>

<div class="mt-8 w-1/2 rounded-lg bg-surface-100 p-6 shadow-lg">
	<h3 class="h3 mb-4">Sample Form</h3>
	<form method="post" action={route('default /')} use:enhance>
		<div class="mb-4">
			<label class="label"
				><span>Name</span>
				<input
					class="input"
					type="text"
					name="name"
					placeholder="Enter your name"
					aria-invalid={$errors.name ? 'true' : undefined}
					bind:value={$form.name}
					{...$constraints.name}
				/>
			</label>

			<label class="label"
				><span>Email</span>
				<input
					class="input"
					type="email"
					name="email"
					placeholder="Enter your email"
					aria-invalid={$errors.email ? 'true' : undefined}
					bind:value={$form.email}
					{...$constraints.email}
				/>
			</label>
		</div>
		<button type="submit" class="variant-filled-tertiary btn w-full"
			>{$delayed ? 'Submiting...' : 'Submit'}</button
		>
		{#if $message && typeof $message === 'string'}
			<p class="text-center text-sm text-success-700">{$message}</p>
		{/if}
	</form>
</div>
