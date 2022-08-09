export default {
    port: 1337,
    dbUri: "mongodb://localhost:27017/rest-api-tutorial",
    // saltWorkFactor = number of times password is being encrypted (the more, the more secure it is)
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
    MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALdF241x0qcApNmPxh4VC1x3h98vTCbB
    yRRH2H5c2F/+REzoqR7OvO/tZulQTH8CmRNcz8GHrNrVJpTq+FM1zFsCAwEAAQ==
    -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIIBOwIBAAJBALdF241x0qcApNmPxh4VC1x3h98vTCbByRRH2H5c2F/+REzoqR7O
    vO/tZulQTH8CmRNcz8GHrNrVJpTq+FM1zFsCAwEAAQJBAIBgDIQtYJLeXpqOnQXh
    U833ZFMvPDZBs2njUYBh5KaHsnlU/6xcdFUaCPrbsk8/Y2uU80olAJj466DGjuSg
    doECIQDoV+kJI+ANZME23Sy8am4E24ekgWCzv7iuKBo9CDB5IQIhAMnu6WylPc2G
    p0vqEry7jpjdE6qxQWbujof2lDdPcOn7AiB3CNLzQ9X+BqiWmynYPg6vnmkX9tC8
    RnUvhIwsyI1NAQIhALVAjiLn+x5ks/uPAfyH+Um6fnGjIwpKLINbz9QJqVdLAiAx
    wBHZ/HmRbyitcTOKRCzdV/srrnhanu3fkQj6rSaW2w==
    -----END RSA PRIVATE KEY-----`
}

