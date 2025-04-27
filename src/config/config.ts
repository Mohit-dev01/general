import { config as conf } from "dotenv";
conf();

const _config = {
  consultancyLogo: process.env.CONSULTANCY_LOGO,
};

export const config = Object.freeze(_config);
