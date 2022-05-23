const admin = require("firebase-admin");

const serviceAccount = {
  type: "service_account",
  project_id: "docs-ce719",
  private_key_id: "6584ed8c8e565ba628cfe39215b15335393d94d1",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCiDmPZ1+dIzOea\no1e6UtFUgLRJbeCS0k89bg4IGmiuvUMM/OKE3zXzvGNWCCx+RRFSl4Y9lggjn7jR\nMRu9x9gPzmVyBJsbvzvrZeqaYvHEJpfEMtIXE0Ic3ICF7E+d2v1Y1D9ERdJH6skS\nXiCBRva7dEeR9UVoCAnBKSrvgeHWcsdowvuOt0HmlLlxRsDoli+qcMspipbh+qeI\nhRdqpvRsl5n8uWZlvuyyGU13BGGnwnSz47ZWNHsnPppjw80XqbLlA4O0yaO88nj9\nEo4PsCD9rwqTZhszQYVUxRBNuCmnmRWzRWVKI7kcG5uzjiLdNkihjA0FUu3Q62B6\nQZPt9p9JAgMBAAECggEAEUzw+v4yKlL5vMgIYxNZVqig1p/81B/QptG7fMD5AQKi\niF3s/ttngpxPjI011ssf1M3pXmTIfKkeDXMtL38IwXM64Ee+mWE6j+BjAdVjUxn9\npMv6Is2DBtrBe8qlG0iYOGX8VRkRIG1fxu62kKaXS57Xzyy8mqUVCYKQG16l0gNm\nKZ7S3DsoofvonA3xh7G91E0IcuMuVZG5ZUP8istFhlr3eAoi+5/onvRbR4UZZ8nT\n9Y//9lam3KL6HnHvY5mnL+1ZdjtqWIFE8LnxvphQWwM/c35Ms0vNOgVM97F3Nn5Z\nKRkpd1Gs6SMDb0YPWYl5BeefoRH6ZpSaEE3E+sBtswKBgQDi1EY+g6t5cL4z1BPz\nhtKjvL8g9NAKEzAbX98RYisJl1VCfUSWVShabSYrONgOpOw9XTzrnQI5YcAbS5b7\nwdYJfOKMx5Av/BAZEFKDGBeiGqSySO6Zah8Bgvs2jdCRzri/LDC3zqgcED9L31gV\nq/8xAgEvow+EwjVenvfWhB0lawKBgQC25aTODix7H2laYnhR1Oba1Spm3ZE2vVX0\npB/3QkjKMLvYKlhA7z2YLv8pyO0CK5ImdNI9xHY3CkU5ZNQcrBXlnLmjpT0XCbru\n2Cw0AEiaksbt/Slvis3dH4pniPe24HK6U/1eHrRWYVGUS84KbRnMzTzWAQEAR9iB\njuUSOklHGwKBgF2Ev2FO0AfFn+WmboNc9sNjMjnYNV2yA4eFw2ZbXvsZVaGQHBMP\nERAXKEFxskJ3ZJ74LgHGPgCCeL3IMHujsyc+Qflg3eWqushanmpGKJhA+941i4nc\n4uOwqPoZBgDXhfvrsDpYDZ9kY3RYpOxqeVAvT2XgiKlnmLFmQTBET+/5AoGAak1h\nE26DhfBE4Ia5Hf7bSrd41J7VBvbW3cEC30iEXBglJce+0cb7itdN8TBaKNfAM1/U\nzpfAic8LWwdyjVOrym/kKewhbKF4J9g3IOZFTKoguzRYf/8yFeJ+JB0ktQMRS6ED\nc0/vSwF3U/UXRVISG8nyIQQmW85mVS8DjyuXaZ8CgYEAgy/Lb2iclOQt1U6XpZyO\n/W3hkEnlWV8+nP/U9vX68RehxrLp2ZamrEhO5K1VItrXmrGwhqxGNdKaKCgWyKxV\nHlT+6DQQHb/p1UUMYSoGT2GwHEPGAfT4jToDzIuwMDWn22XD6MmlWjSDGOp3gow7\nIYdNTpabl+Vf9r35UhJiePk=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-funoo@docs-ce719.iam.gserviceaccount.com",
  client_id: "117371719689179175650",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-funoo%40docs-ce719.iam.gserviceaccount.com",
};

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.auth = firebase.auth();
