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
					collapsed: true, // <--- Hace que esta carpeta aparezca replegada
					items: [
    					{
      						label: 'Archivos',
      						items: [
        						{ autogenerate: { directory: 'configuracion/archivos' } },
      						],
    					},
						{
      						label: 'Interfaz',
      						items: [
        						{ autogenerate: { directory: 'configuracion/interfaz' } },
      						],
    					},
    					{
      						label: 'Dibujos .dwg',
      						items: [
        						{ autogenerate: { directory: 'configuracion/dibujos-dwg' } },
      						],
   						 },
					],	
				},
				{
					label: 'GEOMETRÍA',
					collapsed: true, // <--- Hace que esta carpeta aparezca replegada
					items: [
    					{
      						label: 'Nudos',
      						items: [
        						{ autogenerate: { directory: 'geometria/nudos' } },
      						],
    					},
						{
      						label: 'Barras',
      						items: [
        						{ autogenerate: { directory: 'geometria/barras' } },
      						],
    					},
    					{
      						label: 'Pórticos',
      						items: [
        						{ autogenerate: { directory: 'geometria/porticos' } },
      						],
   						 },
						 {
      						label: 'Mallas',
      						items: [
        						{ autogenerate: { directory: 'geometria/mallas' } },
      						],
   						 },
						 {
      						label: 'Naves',
      						items: [
        						{ autogenerate: { directory: 'geometria/naves' } },
      						],
   						 },
					],	
				},
				{
					label: 'SECCIONES',
					collapsed: true, // <--- Hace que esta carpeta aparezca replegada
					items: [
    					{
      						label: 'de Acero',
      						items: [
        						{ autogenerate: { directory: 'secciones/de-acero' } },
      						],
    					},
						{
      						label: 'de Hormigón',
      						items: [
        						{ autogenerate: { directory: 'secciones/de-hormigon' } },
      						],
    					},
    					{
      						label: 'de Aluminio',
      						items: [
        						{ autogenerate: { directory: 'secciones/de-aluminio' } },
      						],
   						 },
						 {
      						label: 'de Madera',
      						items: [
        						{ autogenerate: { directory: 'secciones/de-madera' } },
      						],
   						 },
					],	
				},
				{
					label: 'COMPONENTES',
					collapsed: true, // <--- Hace que esta carpeta aparezca replegada
					items: [
    					{
      						label: 'Cimentaciones',
      						items: [
        						{ autogenerate: { directory: 'componentes/cimentaciones' } },
      						],
    					},
						{
      						label: 'Forjados',
      						items: [
        						{ autogenerate: { directory: 'componentes/forjados' } },
      						],
    					},
    					{
      						label: 'Muros de sótano',
      						items: [
        						{ autogenerate: { directory: 'componentes/muros-sotano' } },
      						],
   						 },
						 {
      						label: 'Muros resistentes',
      						items: [
        						{ autogenerate: { directory: 'componentes/muros-resistentes' } },
      						],
   						 },
						 {
      						label: 'Muros pantalla',
      						items: [
        						{ autogenerate: { directory: 'componentes/muros-pantalla' } },
      						],
   						 },
					],	
				},
				{
                	label: 'CARGAS',
					collapsed: true, // <--- Hace que esta carpeta aparezca replegada
  					items: [{ autogenerate: { directory: 'cargas' } }],
				},
				{
                	label: 'CÁLCULO',
					collapsed: true, // <--- Hace que esta carpeta aparezca replegada
  					items: [{ autogenerate: { directory: 'calculo' } }],
				},
				{
  					label: 'RESULTADOS',
					collapsed: true, // <--- Hace que esta carpeta aparezca replegada
  					items: [
    					{
      						label: 'Gráficas',
      						items: [
        						{ autogenerate: { directory: 'resultados/graficas' } },
      						],
    					},
						    					{
      						label: 'Listados',
      						items: [
        						{ autogenerate: { directory: 'resultados/listados' } },
      						],
    					},
    					{
      						label: 'Planos',
      						items: [
        						{ autogenerate: { directory: 'resultados/planos' } },
      						],
   						 },
 					 ],
				},
				{
  					label: 'TUTORIALES',
					collapsed: true, // <--- Hace que esta carpeta aparezca replegada
  					items: [
    					{
      						label: 'por Graitec',
      						items: [
        						{ autogenerate: { directory: 'tutoriales/graitec' } },
      						],
    					},
 					 ],
				},
			],
		}),
	],
});
