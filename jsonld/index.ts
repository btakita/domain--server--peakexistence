import { ns_id_be_id_ref_id_jsonld_pair_ } from '@rappstack/domain--server/jsonld'
import { site__author_a1_ } from '@rappstack/domain--server/site'
import { import_meta_env_ } from 'ctx-core/env'
import { ns_id_be_memo_pair_, nullish__none_, tup } from 'ctx-core/rmemo'
import { type request_ctx_T } from 'relysjs/server'
const ns = import_meta_env_().NODE_ENV === 'production' ? 'app' : ''
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
