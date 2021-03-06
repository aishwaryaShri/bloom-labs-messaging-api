require('dotenv').config()

module.exports = {
	JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY,
	TWILIO_FROM_PHONE: process.env.TWILIO_FROM_PHONE,
	TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
	TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
	ADMIN_EMAIL: process.env.ADMIN_EMAIL,
	ADMIN_EMAIL_PASSWORD: process.env.ADMIN_EMAIL_PASSWORD,
	TEST_RESULT_EMAIL: process.env.TEST_RESULT_EMAIL,
	TEST_RESULT_EMAIL_PASSWORD: process.env.TEST_RESULT_EMAIL_PASSWORD,
	MESSAGE_API_DOMAIN_URL: "https://play-message.sonorashield.com/",
	PLIVO_FROM_PHONE: process.env.PLIVO_FROM_PHONE,
	PLIVO_AUTH_ID: process.env.PLIVO_AUTH_ID,
	PLIVO_AUTH_TOKEN: process.env.PLIVO_AUTH_TOKEN
}
