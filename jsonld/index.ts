import { jsonld_id__new, ns_id_be_id_ref_id_jsonld_pair_ } from '@rappstack/domain--server/jsonld'
import { site__author_a1_, site__title_, site__website_ } from '@rappstack/domain--server/site'
import { import_meta_env_ } from 'ctx-core/env'
import { ns_id_be_memo_pair_, nullish__none_, tup } from 'ctx-core/rmemo'
import { url__join } from 'ctx-core/uri'
import { type request_ctx_T } from 'relysjs/server'
import { AboutPage, ContactPage, ImageObject, Organization, WebSite } from 'schema-dts'
import peak_existence_svg from '../public/image/peak_existence.svg'
const ns = import_meta_env_().NODE_ENV === 'production' ? 'app' : ''
export const [
	[WebSite_id_ref_],
	WebSite_id_,
] = [
	ns_id_be_id_ref_id_jsonld_pair_(ns, 'WebSite', ctx=>{
		return nullish__none_(tup(site__website_(ctx), site__title_(ctx)), (
			site__website, site_title
		)=><WebSite>{
			'@type': 'WebSite',
			'@id': jsonld_id__new(site__website, 'WebSite'),
			url: site__website,
			name: site_title,
			publisher: dr_manny_emenike_Person_id_ref_(ctx),
		})
	}),
	(ctx:request_ctx_T)=><string>WebSite_id_ref_(ctx)['@id'],
]
export const [
	[dr_manny_emenike_Person_id_ref_,],
	dr_manny_emenike_Person_id_
] = [
	ns_id_be_id_ref_id_jsonld_pair_(ns, 'Person', ctx=>{
		return nullish__none_(
			tup(site__author_a1_(ctx)), (
				site__author_a1
			)=>{
				const dr_manny_emenike = site__author_a1[0]
				if (dr_manny_emenike.name !== 'Dr. Manny Emenike') {
					throw Error('author.name !== \'Dr. Manny Emenike\'')
				}
				return dr_manny_emenike
			})
	}),
	(ctx:request_ctx_T)=>dr_manny_emenike_Person_id_ref_(ctx)!['@id']
]
export const [
	[brian_takita_Person_id_ref_,],
	brian_takita_Person_id_
] = [
	ns_id_be_id_ref_id_jsonld_pair_(ns, 'Person', ctx=>{
		return nullish__none_(
			tup(site__author_a1_(ctx)), (
				site__author_a1
			)=>{
				const brian_takita = site__author_a1[1]
				if (brian_takita.name !== 'Brian Takita') {
					throw Error('author.name !== \'Brian Takita\'')
				}
				return brian_takita
			})
	}),
	(ctx:request_ctx_T)=>brian_takita_Person_id_ref_(ctx)!['@id']
]
export const [
	,
	site__author_id_ref_a1_
] = ns_id_be_memo_pair_(
	ns,
	'site__author_id_ref_a1',
	ctx=>
		nullish__none_(tup(
			dr_manny_emenike_Person_id_ref_(ctx),
			brian_takita_Person_id_ref_(ctx)
		), (dr_manny_emenike_Person_id_ref, brian_takita_Person_id_ref)=>
			[dr_manny_emenike_Person_id_ref, brian_takita_Person_id_ref]))
export const [
	Organization_id_ref_
] = ns_id_be_id_ref_id_jsonld_pair_(ns, 'Organization', ctx=>{
	return nullish__none_(tup(site__website_(ctx), site__title_(ctx)), (
		site__website, site__title
	)=><Organization>{
		'@type': 'Organization',
		'@id': jsonld_id__new(site__website, 'Organization'),
		url: site__website,
		name: site__title,
		logo: logo_ImageObject_id_ref_(ctx),
		founder: dr_manny_emenike_Person_id_ref_(ctx),
	})
})
export const [
	logo_ImageObject_id_ref_,
] = ns_id_be_id_ref_id_jsonld_pair_(ns, 'logo_ImageObject', ctx=>{
	return nullish__none_(tup(site__website_(ctx)), (
		site__website
	)=><ImageObject>{
		'@type': 'ImageObject',
		'@id': jsonld_id__new(site__website, 'logo'),
		url: url__join(site__website, peak_existence_svg),
		width: '256px',
		height: '256px',
	})
})
export const [
	[AboutPage_id_ref_, AboutPage_],
	AboutPage_id_,
	AboutPage__description_,
] = [
	ns_id_be_id_ref_id_jsonld_pair_(ns, 'AboutPage', ctx=>{
		return nullish__none_(tup(site__website_(ctx), site__author_a1_(ctx)), (
			site__website, site__author_a1
		)=><AboutPage>{
			'@type': 'AboutPage',
			'@id': jsonld_id__new(url__join(site__website, 'about'), 'AboutPage'),
			url: url__join(site__website, 'about'),
			name: 'About | ' + site__author_a1[0].name,
			about: dr_manny_emenike_Person_id_ref_(ctx),
			description:
				'Brian Takita creates efficient full stack software systems that grow with you. No web system is too big to too small. From marketing sites, copy, articles, & SEO. To full featured web & mobile apps. Brian Takita\'s custom software is crafted to be efficient, engaging for your audience, & search-engine friendly. He uses the latest AI tools & effective skills at copyrighting & UI design to move your goals forward.',
			inLanguage: 'en-us',
			isPartOf: WebSite_id_ref_(ctx)
		})
	}),
	(ctx:request_ctx_T)=><string>AboutPage_id_ref_(ctx)['@id'],
	(ctx:request_ctx_T)=><string>AboutPage_(ctx).description,
]
export const [
	ContactPage_id_ref_
] = ns_id_be_id_ref_id_jsonld_pair_(ns, 'ContactPage', ctx=>{
	return nullish__none_(tup(site__website_(ctx), site__author_a1_(ctx)), (
		site__website, site__author_a1
	)=>{
		return <ContactPage>{
			'@type': 'ContactPage',
			'@id': jsonld_id__new(site__website, 'ContactPage'),
			url: url__join(site__website, '#ContactPage'),
			name: 'Contact ' + site__author_a1[0].name,
			inLanguage: 'en-us',
			isPartOf: WebSite_id_ref_(ctx),
			about: dr_manny_emenike_Person_id_ref_(ctx),
			mainEntity: dr_manny_emenike_Person_id_ref_(ctx)
		}
	})
})
