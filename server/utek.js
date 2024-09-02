module.exports = {
    apps : [{
      name   : "DojangPedia",
      script : "./bin/www.js",
      env : {
        PORT : 80,
        DATABASE_URL : 'postgresql://postgres.nflawztzcbvwxlwbfujl:Indonesia123!123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres',
        NODE_ENV : "production",
        SECRET: "rahasia",
        cloudinary_cloud_name: "dxtloo9s1",
        cloudinary_api_key: "999525179443578",
        cloudinary_api_secret: "p_U2npoEhr-Igq21Lc6KK5koyp4"
      }
    }]
  }