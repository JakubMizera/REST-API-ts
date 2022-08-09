export default {
    port: 1337,
    dbUri: "mongodb://localhost:27017/rest-api-tutorial",
    // saltWorkFactor = number of times password is being encrypted (the more, the more secure it is)
    saltWorkFactor: 10,
    publicKey: `-----BEGIN PUBLIC KEY-----
    MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgFQ88SGmF/HNzlKg2rgPBfgrP7PG
    s4cnmYl02/fAByaFaRGdJy0mqODLFeRn2BPz9+UJCN3eTp91kT7Tu+hFfcviahgO
    /m/OgmdeVZCYAj/kCMX3VTcIMwGWJHnn37irpE5xIcMTqRtXKIsMJ/XkPb6yONqG
    rGiO14HBMNAvdd6nAgMBAAE=
    -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICWQIBAAKBgFQ88SGmF/HNzlKg2rgPBfgrP7PGs4cnmYl02/fAByaFaRGdJy0m
    qODLFeRn2BPz9+UJCN3eTp91kT7Tu+hFfcviahgO/m/OgmdeVZCYAj/kCMX3VTcI
    MwGWJHnn37irpE5xIcMTqRtXKIsMJ/XkPb6yONqGrGiO14HBMNAvdd6nAgMBAAEC
    gYA3ML5jZ2jkugxlwpHKab1lfSB9bsAM2vsTPgcoaR3GNT5Dlg0m3d9jeGtdfFPr
    rrpJywOOKaqleuewnBTO90iVXP89gNNVmqINeTYlHGCDVFBgDJ+Pa/ytjC1KqdfT
    GcgBxpef1fyjQzwPF6Q/10sKuHMqnS1wghYq9aIcHPggcQJBAKEdD/cS3ox9FRnU
    oRwjmsvkSeuYJnp6BIrDdzxSfl7jtfNrV0gdQL8W/Xz+FJ100WBfls/yhg0V4kV0
    M0bdhMMCQQCF2W+MEYsX4gBXTGVKoxXeQJ+ZB8Tx9OLmzXGeJV/gDpIJWSK//Sx6
    YaVKRQjOz39GS3rTQqUctPcXZoKPyFBNAj80PDfw4y1EX0l4Fnglp2WItXtB5xKS
    ovzWAImoBRbzrOBRC3xA5TsYuVt2KuqEIlu/4z4CLZ9Ins+9tO7rCucCQFLNBeJi
    X+dwWcGncunPJZIN7C0gz0bWtR8ObIDmof7bRKAf0g1usvsqOLRPLHmzhwqXWu4h
    xj6R/GEvewkzY+kCQAVyHk5Vf2gwjpbAE41cSeniW5QXdsN65uSx6Mkzhn8at5YG
    1MYXi74o6hpw9ZccaSID36N1I7BquPW4X3XdIu0=
    -----END RSA PRIVATE KEY-----`
}

