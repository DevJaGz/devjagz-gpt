import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { EnvironmentPlugin } from 'webpack';
dotenv.config();

module.exports = {
  plugins: [new EnvironmentPlugin(['OPENAI_KEY'])],
};
