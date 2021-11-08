const mongoose = require("mongoose");
const slug = require("slug");

/* Two ways */

/* const Schema = mongoose.Schema; */
const { Schema } = mongoose;

const portfolioSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},

	slug: {
		type: String,
		required: true,
		unique: true,
		default: function () {
			return slug(this.title);
		},
	},

	description: {
		type: String,
		required: true,
	},

	longDescription: {
		type: String,
	},

	image: {
		type: String,
		required: true,
	},

	/* array de objetos (colchetes) */
	technologies: [
		{
			label: String,
			icon: String,
			iconType: String,
		},
	],

	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model("portfolio", portfolioSchema);
