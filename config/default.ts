export default {
    port: 1337,
    dbUri: "mongodb://localhost:27017/rest-api-tutorial",
    // saltWorkFactor = number of times password is being encrypted (the more, the more secure it is)
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
publicKey: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHdGWPgAZtVwF/ePuuGXsXdAtQrx
lXpt/R2bYUiyM3lNhzhZ4dEN6DVDr/ZJUlrbZOlZ185wyVaMibLuWNqK0I78WsCe
2AFUB3C9z371EAeSQj41cLHDJu7fZybg8tEaYnHZKs1GDa3BWpF1cl83HNniWvdT
V2YcvNOXsqSfGIGxAgMBAAE=
-----END PUBLIC KEY-----`,
privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgHdGWPgAZtVwF/ePuuGXsXdAtQrxlXpt/R2bYUiyM3lNhzhZ4dEN
6DVDr/ZJUlrbZOlZ185wyVaMibLuWNqK0I78WsCe2AFUB3C9z371EAeSQj41cLHD
Ju7fZybg8tEaYnHZKs1GDa3BWpF1cl83HNniWvdTV2YcvNOXsqSfGIGxAgMBAAEC
gYAoTvnaNiiKkStIWqaJfr5W0uNcI3Ckw277BnvGGZMTt4OvI5ERGWYUOh/JV9Yh
JmvgAKDR/4PLYAtZEPuuP6NjeNxQrldrHYEx0E6vVqKBnz7stq04gFJiYhFteKeC
KyMeBzUCicvPYkFZX2MxqL7DKYgrniQAglNjGi15qBup0QJBALegajNX2QtIZC1d
V4WNdnkbEAbhlf4Wnqsq+eumHSKahY5zAaWXKCkLsuIGywW0sxnI1tImuQWtuQJh
6YV+YysCQQCmSPP0xPvLxWQdaK4Z6KZA3LJ8fObQQ+0Gpm16NlbSOUa+6opnYe8T
+giYLQL4rB3+25SGvh9ydzUOuGPuCLCTAkEApep8CwhFRLyUR6kfe7zmX2bkhFMw
g/VMSLz8NMBTcwDLzHp98nEyCGRZrYEV0IIFkja2ZAw5AbiGgnCV39jjIQJBAJWJ
VZnw6188i+PGl4rFJX1++yPoTslLzIQGdr1I0JsM1wopcX23HIEigUgYcmuenPrs
DI1/vFf7y8MJHxSYy/ECQDSBxjsdm/4YWonphvecaVZEEUE0pZaMtR5mcQUc1dTs
MouuM9sey6z2EUfr6M78i+d+chn3B1WansRsiprEiwU=
-----END RSA PRIVATE KEY-----`
}

