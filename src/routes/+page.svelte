<script lang="ts">
	import type { PageData } from './$types';
	import { route } from '$lib/ROUTES';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: PageData;

	const { form, message, errors, constraints, delayed, enhance } = superForm(data.basicForm, {
		resetForm: true
	});
</script>

<div class="container mx-auto flex space-x-8">
	<div class="mt-8">
		<h1 class="h1 mb-8">Byteminds PH Sveltekit Boiler Plate</h1>
		<p>
			Visit <a class="anchor" href={route('blog')}>Byteminds PH Blog</a> to read some tutorial
		</p>
		<p>
			This template also include set up of Prisma ORM - default database is MySQL, Skeleton UI
			library, and Kit Routes
		</p>
		<p>Visit the following links:</p>
		<ul class="list-inside list-disc">
			<li><a class="anchor" href="https://www.prisma.io/">Prisma ORM</a></li>
			<li><a class="anchor" href="https://www.skeleton.dev/">Skeleton UI</a></li>
			<li><a class="anchor" href="https://www.kitql.dev/docs">Kit Routes</a></li>
			<li><a class="anchor" href="https://superforms.rocks/">Superforms</a></li>
		</ul>
		<p class="mt-8">Happy Coding! &#128522</p>
	</div>

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
</div>
