import abbr from 'remark-abbr';
import urls from 'rehype-urls';
import slug from 'rehype-slug';
import autoLinkHeadings from 'rehype-autolink-headings';
import addClasses from 'rehype-add-classes';
import figure from 'rehype-figure';

function processUrl(url, node) {
	if (node.tagName === 'a') {
		node.properties.class = 'text-link';

		if (!url.href.startsWith('/')) {
			// Open external links in new tab
			node.properties.target = '_blank';
			// Fix a security concern with offsite links
			// See: https://web.dev/external-anchors-use-rel-noopener/
			node.properties.rel = 'noopener';
		}
	}
}

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: {
		blog: './src/routes/blog/_layout.svelte'
	},
	remarkPlugins: [abbr],
	rehypePlugins: [
		figure,
		[urls, processUrl],
		slug,
		[autoLinkHeadings, { behavior: 'wrap' }],
		[addClasses, { 'ul,ol': 'list' }]
	]
};

export default config;
