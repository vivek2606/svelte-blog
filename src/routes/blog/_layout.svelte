<!-- src/routes/blog/_layout.svelte -->
<script>
    // These props get filled in from the page's front matter
    export let title;
    export let coverImageUrl;
    export let author;
    export let date;
    export let tags;
</script>

<svelte:head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:image" content={coverImageUrl} />
</svelte:head>
<div class="flex flex-col text-center m-5 p-8">
    <h1 class="font-extrabold text-md sm:text-2xl md:text-3xl text-gray-600">{title}</h1>
    <p class="date text-gray-600 font-semibold">on: { date }</p>
    <p class="date text-gray-600 font-semibold">by: { author }</p>
    <p class="tags font-semibold text-gray-600">tags: {tags}</p>
</div>
<section class="container mx-auto prose px-5 md:prose-lg lg:prose-xl prose-indigo">
    <slot />

    <a href=" /blog">Back to blog index</a>
</section>