// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mis apuntes sobre Tricalc',
			//social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Modelado',
					items: [{ autogenerate: { directory: 'modelado' } }],
				},
				{
                	label: 'Cargas',
  					items: [{ autogenerate: { directory: 'cargas' } }],
				},
				{
  					label: 'Construcción web',
  					items: [
    					{
      						label: 'Markdown',
      						items: [
        						{ autogenerate: { directory: 'construccion-web/markdown' } },
      						],
    					},
						    					{
      						label: 'MDX',
      						items: [
        						{ autogenerate: { directory: 'construccion-web/mdx' } },
      						],
    					},
    					{
      						label: 'Desarrollo',
      						items: [
        						{ autogenerate: { directory: 'construccion-web/desarrollo' } },
      						],
   						 },
						 {
      						label: 'Visual Studio Code',
      						items: [
        						{ autogenerate: { directory: 'construccion-web/visual-studio-code' } },
      						],
   						 },
 					 ],
				},
			],
		}),
	],
});
