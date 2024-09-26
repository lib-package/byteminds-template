<script lang="ts">
	import type { PageData } from './$types';
	import { route } from '$lib/ROUTES';
	import { SampleForm } from '$lib/components';

	export let data: PageData;

	const links = [
		{ name: 'Prisma ORM', href: 'https://www.prisma.io/' },
		{ name: 'Skeleton UI', href: 'https://www.skeleton.dev/' },
		{ name: 'Kit Routes', href: 'https://www.kitql.dev/docs' },
		{ name: 'Superforms', href: 'https://superforms.rocks/' },
		{ name: 'Lucia Auth', href: 'https://lucia-auth.com/getting-started/' }
	];
</script>

<div class="container mx-auto flex space-x-8">
	<div class="mt-8">
		<h1 class="h1 mb-8">Byteminds PH Sveltekit Boiler Plate</h1>
		<p>
			Visit <a class="anchor" href={route('blog')}>Byteminds PH Blog</a> to read some tutorial
		</p>
		<p>
			This template also include set up of Prisma ORM - default database is MySQL, Skeleton UI
			library, Kit Routes, Superforms, and Lucia auth
		</p>
		<p>Visit the following links:</p>
		<ul class="list-inside list-disc">
			{#each links as link}
				<li><a class="anchor" href={link.href} target="_blank">{link.name}</a></li>
			{/each}
		</ul>
		<p class="mt-8">Happy Coding! &#128522</p>
	</div>

	<!--Delete this component in the components folder inside the lib folder-->
	<SampleForm formData={data.basicForm} />
</div>
