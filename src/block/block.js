/**
 * BLOCK: advanced-payment-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	SelectControl,
	PanelBody,
	TextControl 
} = wp.components;

const {
	InspectorControls,
	RichText,
	PlainText
} = wp.editor;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
 var shortcode_obj = { email: "yourpaypalemail@example.com", size: "large", amount: "15.00", currency: "USD", purpose: "Charity for Child Health Care", mode: "live" };
registerBlockType( 'cgb/block-advanced-payment-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Advanced Payment Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'advanced payment block' ),
		__( 'payment' ),
		__( 'payment block' ),
	],
	attributes: {
		id: {
			type: 'number',
			default: 1
		},
		shortcode_content: {
			type: "string",
			source: "text",
			default: "[advanced_payment_block email='" + shortcode_obj.email + "' amount='" + shortcode_obj.amount + "' currency='" + shortcode_obj.currency + "' size='" + shortcode_obj.size + "' purpose='" + shortcode_obj.purpose + "' mode='" + shortcode_obj.mode + "']"
		},
		selectnamecontrol: {
			type: 'string',
			default: ''
		},
		advanced_Payment_email: {
			type: 'string',
			default: ''
		},
		advanced_Payment_amount: {
			type: 'string',
			default: ''
		},
		advanced_Payment_currency: {
			type: 'string',
			default: ''
		},
		advanced_Payment_size: {
			type: 'string',
			default: ''
		},
		advanced_Payment_purpsoe: {
			type: 'string',
			default: ''
		},
		advanced_Payment_type: {
			type: 'string',
			default: ''
		},
		payment_method_type: {
			type: 'string',
			default: ''
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		// Creates a <p class='wp-block-cgb-block-advanced-payment-block'></p>.
		const payment_method = [
			{ label: 'Paypal', value: 'paypal' }
	   ];

	   var attributes    = props.attributes,
                className         = attributes.className,
                shortcode_content = attributes.shortcode_content,
                Onchangename      = attributes.Onchangename,
                selectnamecontrol = attributes.selectnamecontrol,
                advanced_Payment_email      = attributes.advanced_Payment_email,
                advanced_Payment_amount     = attributes.advanced_Payment_amount,
                advanced_Payment_currency   = attributes.advanced_Payment_currency,
                advanced_Payment_size       = attributes.advanced_Payment_size,
                advanced_Payment_purpsoe    = attributes.advanced_Payment_purpsoe,
                advanced_Payment_type       = attributes.advanced_Payment_type,
                payment_method_type  = attributes.payment_method_type,
                setAttributes     = props.setAttributes;
				
		return ([
			<InspectorControls>
				 <div className="donate-panel-op">
					<PanelBody>
							<SelectControl
								label = 'Payment Method'
								options = {payment_method}
								//onChange = {OnchangePaypalType }
								value = {payment_method_type}
							/>
					</PanelBody>
				 </div>

			</InspectorControls>,
			<div className={ props.className }>
				<p>— Hello from the backend.</p>
				<p>
					CGB BLOCK: <code>advanced-payment-block</code> is a new Gutenberg block
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		]);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		return (
			<div className={ props.className }>
				<p>— Hello from the frontend.</p>
				<p>
					CGB BLOCK: <code>advanced-payment-block</code> is a new Gutenberg block.
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	},
} );
