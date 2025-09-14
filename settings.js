require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAIIqLlvc2RqoWgQAAIUHAAAKAAAAY3JlZHMuanNvbpVUW5OiOBj9L3lta+QOWtVVi6CAeEehZWsfIgSIQMAAIk7537ewu2fmYXe2l6eQy*ednEu+A1LgCtmoA+PvoKT4CmvUD+uuRGAMJk0UIQoGIIQ1BGPAmEu1iFd0+5bIia3g7Sby9zNzODX9+*3Mt1rU1d0LCufM8hU8BqBsThkOflOQl*i7rQhVILx47vxN8qjhaaPsxfLZu2U2SFROGPltEG3VV*DoK0JMMYmnZYJyRGFmo24DMf0afDjdNsIxJv5Eos56uEWpIhfbqEYCd8K+4W81Pim5y92dBV+DL*IiORfIOcUjIxy6*otu3O9tB6+aHF9hfAtPp2WLZ95o*wG*wjFBoRUiUuO6+zLvytJTI7va45M4GzYNi2argzTnJufyNKc8fxm1eewmLHt3268B58jCPna244Y7k4bRTdP9EVFvnmmqVrThAzYt7GjGTBwn*hX4hn56Jf0*vBuLoWCdpik0soUsH+dT5qYMj9pKcKt7kBjnJCsvwcINJuSLtpnZiTv32UZsptNod3XEDG7W6l3fv0yXSSTO+N3FeFuZJ6mtfsKHdUN*h9L3OMM9CzYqslMZWxldhKu28ZStueHPZti6M33FLUmKISqLqdHeVwoD18JmGKW+HLXCYU6U1EqGJwQpX0yF9iosdfX1eaMUdVYIxuxjACiKcVVTWOOCPOe40QDA8OqggKL6SS+oDM09KZ4b6rzYNh00z9YqWjPtcccJZx6T3GXnWh7JnFG8ggEoaRGgqkKhiau6oN0SVRWMUQXGf*41AATd6nfh+nY8OwARplV9IE2ZFTD8VPVzEQZB0ZDa6Uig9QNEwZj5OY3qGpO46nlsCKRBgq9IS2BdgXEEswr9uCGiKATjmjboR2q1IuyJt1mDYz3RBAOQPwXBYW9JUZIlRVJ4VpLGovRH9a3ty8Ky*EZQDQaAwH43gBTHHWpxFRY5GIDseZhVZJFVFHHES5LICv35fuHxA3ffJkQ1xFkFxkCzN11uHrZDqPm3+HicdKpqq2rP5ec9Pw3zLojn6bpZzZDJnQ*luY0YXfA1MV9dkpVj749tvkgNJ4ek3gr*VASMgcvQnT66+HJmFpJmafVhf7OKHUlrUTMEfU*4lHCOPa8ibTqT3iY2m3KY2eRREuvrfO2097dLsoL2mmgL9ZLM3mbpRmtf+24huuIA*drMoW5Kg7hRLjN545W2udguufMuGXqjOco99cZcloeo0GC1NozApZv70oMdc2PkXCemY11V1MkMDHaaHrLNnsQ+46jtu5WfUco+njD8NFmvYP8bYfR8ET6U+k9F34H3xmMeg19qfLwx*5LTiZvF7U2evCWjgrWPijlSX4xt459hsT*glFvOsThJy7yUD2vwePw1AGUG66igeZ+s*ATBANCi6W1skaj4TSdtYlnaR4IzWNXqz2jscY6qGuYlGLOyKCuczDHs+64NLUoTVknPgCGoedP7vFPL0qlh*Zk0oPafdd6Cx99QSwECFAMUAAAICACCKi5b3NkaqFoEAACFBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACCBAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN ||' 256768683166 ',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'WISDOM738',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
