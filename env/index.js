const dotenv = require("dotenv");
const logger = require("../src/configurations/logger");

// Set default to "dev"
const nodeEnv = process.env.ENV_FILE || "development";
const path = `./env/${nodeEnv}.env`;

const result = dotenv.config({ path });

logger.info(`Environment : ${nodeEnv}`);

if (result.error) {
    logger.info(result.error.message);
}
