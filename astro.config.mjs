import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import vue from '@astrojs/vue';

export default defineConfig({
	integrations: [vue()],
	adapter: vercel(),
        output: "server"
});
