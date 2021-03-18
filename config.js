const env = process.env;
export const nodeEnv = env.nodeEnv || 'development'
export default {
    port: env.port || 8080
};

export const logStars = function(message) {
    console.info('**********');
    console.info(message);
    console.info('**********');
  };