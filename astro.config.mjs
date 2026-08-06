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
					label: 'CONFIGURACIÓN',
					items: [
    					{
      						label: 'Archivos',
      						items: [
        						{ autogenerate: { directory: 'configuracion' } },
      						],
    					},
						{
      						label: 'Interfaz',
      						items: [
        						{ autogenerate: { directory: 'configuracion' } },
      						],
    					},
    					{
      						label: 'Dibujos .dwg',
      						items: [
        						{ autogenerate: { directory: 'configuracion' } },
      						],
   						 },
					],	
				},
				{
					label: 'GEOMETRÍA',
					items: [
    					{
      						label: 'Nudos',
      						items: [
        						{ autogenerate: { directory: 'geometria' } },
      						],
    					},
						{
      						label: 'Barras',
      						items: [
        						{ autogenerate: { directory: 'geometria' } },
      						],
    					},
    					{
      						label: 'Pórticos',
      						items: [
        						{ autogenerate: { directory: 'geometria' } },
      						],
   						 },
						 {
      						label: 'Mallas',
      						items: [
        						{ autogenerate: { directory: 'geometria' } },
      						],
   						 },
						 {
      						label: 'Naves',
      						items: [
        						{ autogenerate: { directory: 'geometria' } },
      						],
   						 },
					],	
				},
				{
					label: 'SECCIONES',
					items: [
    					{
      						label: 'de Acero',
      						items: [
        						{ autogenerate: { directory: 'secciones' } },
      						],
    					},
						{
      						label: 'de Hormigón',
      						items: [
        						{ autogenerate: { directory: 'secciones' } },
      						],
    					},
    					{
      						label: 'de Aluminio',
      						items: [
        						{ autogenerate: { directory: 'secciones' } },
      						],
   						 },
						 {
      						label: 'de Madera',
      						items: [
        						{ autogenerate: { directory: 'secciones' } },
      						],
   						 },
					],	
				},
				{
					label: 'COMPONENTES',
					items: [
    					{
      						label: 'Cimentaciones',
      						items: [
        						{ autogenerate: { directory: 'componentes' } },
      						],
    					},
						{
      						label: 'Forjados',
      						items: [
        						{ autogenerate: { directory: 'componentes' } },
      						],
    					},
    					{
      						label: 'Muros de sótano',
      						items: [
        						{ autogenerate: { directory: 'componentes' } },
      						],
   						 },
						 {
      						label: 'Muros resistentes',
      						items: [
        						{ autogenerate: { directory: 'componentes' } },
      						],
   						 },
						 {
      						label: 'Muros pantalla',
      						items: [
        						{ autogenerate: { directory: 'componentes' } },
      						],
   						 },
					],	
				},
				{
                	label: 'CARGAS',
  					items: [{ autogenerate: { directory: 'cargas' } }],
				},
				{
                	label: 'CÁLCULO',
  					items: [{ autogenerate: { directory: 'calculo' } }],
				},
				{
  					label: 'RESULTADOS',
  					items: [
    					{
      						label: 'Gráficas',
      						items: [
        						{ autogenerate: { directory: 'resultados' } },
      						],
    					},
						    					{
      						label: 'Listados',
      						items: [
        						{ autogenerate: { directory: 'resultados' } },
      						],
    					},
    					{
      						label: 'Planos',
      						items: [
        						{ autogenerate: { directory: 'resultados' } },
      						],
   						 },
 					 ],
				},
			],
		}),
	],
});
