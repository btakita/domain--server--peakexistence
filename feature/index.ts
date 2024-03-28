import altitude_training_webp from '../public/image/article/altitude-training.webp'
import anti_aging_and_life_extension_therapy_webp
	from '../public/image/article/anti-aging-and-life-extension-therapy.webp'
export const altitude_training_feature = altitude_training_feature_()
function altitude_training_feature_() {
	return <feature_T>{
		title: 'Altitude Training',
		description: `Altitude training enhances some endurance athletes' performance by increasing their oxygen-carrying capacity through living high and training low.`,
		slug: 'altitude-training',
		tag_a1: [
			'altitude',
			'training',
			'oxygen',
			'athletic',
			'endurance',
			'exercise',
			'ewot',
			'altitude-training',
			'endurance-athletes',
			'oxygen-capacity',
			'erythropoietin-epo',
			'hematocrit-increase',
			'hypoxic-training',
			'live-high-train-low',
			'iron-stores-and-nutrition',
			'individual-response-to-hypoxia',
			'limitations-of-high-altitude-training'
		],
		hero_image: altitude_training_webp,
	}
}
export const anti_aging_and_life_extension_therapy_feature = anti_aging_and_life_extension_therapy_feature_()
function anti_aging_and_life_extension_therapy_feature_() {
	return <feature_T>{
		title: `Anti-Aging and Life Extension Therapy`,
		description: `We take a holistic approach to anti-aging and life-extension therapies. That the key to graceful aging lies in addressing both the external and internal factors. That contribute to the aging process. Our treatments optimize physical health, mental well-being, and emotional balance. Helping you feel younger and more energetic from the inside out.`,
		slug: 'anti-aging-and-life-extension-therapy',
		tag_a1: [
			'Anti-Aging',
			'Life Extension',
			'Holistic Wellness',
			'Rejuvenation Therapies',
			'Health and Vitality',
			'Wellness Innovation',
			'Longevity Strategies',
			'Youth Preservation',
			'Advanced Healthcare',
			'Mental Well-being',
			'Emotional Health',
			'Physical Fitness',
			'Nature-Inspired Wellness',
			'Vibrant Living',
			'Age-Defying Treatments',
			'Diet',
			'Senescence',
		],
		hero_image: anti_aging_and_life_extension_therapy_webp,
	}
}
export const hyperbaric_oxygen_therapy_feature = hyperbaric_oxygen_therapy_feature_()
function hyperbaric_oxygen_therapy_feature_() {
	return <feature_T>{
		title: 'Hyperbaric Oxygen Therapy',
		slug: 'hyperbaric-oxygen-therapy',
		// language=md
		description: `
Hyperbaric Oxygen Therapy (HBOT) involves administering 100% pure oxygen in a pressurized chamber. Allowing your body to absorb higher levels of oxygen than normal breathing. This increase in oxygen concentration:

- promotes healing
- accelerates tissue repair
- enhances the body’s natural ability to fight infections
		`.trim(),
		tag_a1: [
			'hyperbaric',
			'oxygen',
			'therapy',
			'breath',
			'exercise',
			'oxygen',
			'therapy',
			'oxygen-therapy',
			'stamina',
			'accelerated-recovery',
			'cardiovascular-health',
			'detoxification',
			'mental-clarity',
			'inflammation-reduction',
			'weight-loss',
		],
	}
}
export const exercise_with_oxygen_therapy_feature = <feature_T>exercise_with_oxygen_therapy_feature_()
function exercise_with_oxygen_therapy_feature_() {
  return <feature_T>{
		title: `Exercise with Oxygen Therapy (EWOT)`,
		slug: 'exercise-with-oxygen-therapy-ewot',
		tag_a1: [
			'exercise',
			'oxygen',
			'ewot',
			'exercise-with-oxygen-therapy',
			'therapy',
			'oxygen-therapy',
			'stamina',
			'accelerated-recovery',
			'cardiovascular-health',
			'detoxification',
			'mental-clarity',
			'inflammation-reduction',
			'weight-loss',
			'enhanced-physical-performance',
		],
		description: `Supercharge your exercise routine & boost your overall well-being.`,
		// hero_image: exercise_with_oxygen_therapy_webp,
		hero_image: 'https://placehold.co/1020x520.webp',
	}
}
export type feature_T = {
	title:string
	description:string
	slug:string
	tag_a1:string[]
	hero_image?:string
}
