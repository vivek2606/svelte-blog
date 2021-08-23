<script context="module">
    const allPosts = import.meta.glob("./*.{md,svx}")
    let body = [];
    for (let path in allPosts) {
        body.push(
            allPosts[path]().then(({ metadata }) => {
                return { path, metadata };
            })
        );
    }
    export const load = async () => {
        const posts = await Promise.all(body);
        return {
            props: {
                posts,
            }
        }

    }
</script>

<script>
    export let posts
</script>
<svelte:head>
    <title>Blog</title>
</svelte:head>

<section class="min-h-screen bg-gray-200">
    <h1 class="text-center font-semibold text-2xl md:text-4xl p-8 text-indigo-500">Welcome to My Blogs Page</h1>


    <ul class="h-screen">
        {#each posts as {path,metadata}}
        <li class="m-5 text-2xl font-semibold text-gray-800 hover:text-indigo-500">
            <a href={`/blog/${path}`.replace(".md","").replace(".svx","")}>{metadata.title}</a>
        </li>
        <li class="m-5 text-gray-500">
            author: {metadata.author} {' '}date: {metadata.date}
        </li>
        <hr />
        {/each}

    </ul>
</section>