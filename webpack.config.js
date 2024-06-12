const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    // Your existing config
    plugins: [
        new webpack.DefinePlugin({
            'process.env.DISCORD_WEBHOOK_URL': JSON.stringify(process.env.DISCORD_WEBHOOK_URL),
        }),
    ],
};
