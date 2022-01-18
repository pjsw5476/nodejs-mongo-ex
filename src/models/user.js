const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
		},
		mobileNumber: {
			type: String,
			maxlength: 15,
			required: true,
		},
		//FIX 세션추가
		sessions: [
			{
			  createdAt: { type: Date, required: true },
			},
		],
	},
	{ timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
